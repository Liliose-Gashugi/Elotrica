"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const WA_LINK = `https://wa.me/250788458897?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.%20Here%20are%20my%20details%3A%0AService%3A%20%0ADate%20%26%20Time%3A%20%0APickup%3A%20%0ADropoff%3A%20`;

const stats = [
  { value: "100%", label: "Electric", color: "#A88549" },
  { value: "24/7",  label: "Available", color: "#f7f4ef" },
];

const VIDEO_ID = "VGAh4tVEFms";
const START    = 27;   // 0:27
const END      = 71;   // 1:11

/* Minimal YT types — avoids installing @types/youtube */
declare global {
  interface Window {
    YT: {
      Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
      PlayerState: { ENDED: number; PLAYING: number; PAUSED: number; BUFFERING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}
interface YTPlayer {
  getCurrentTime: () => number;
  seekTo: (s: number, allow?: boolean) => void;
  playVideo: () => void;
  destroy: () => void;
}

export default function Hero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const playerRef     = useRef<YTPlayer | null>(null);
  const [covered, setCovered] = useState(true); // starts opaque, fades out once video plays

  const flashCover = useCallback(() => {
    setCovered(true);
    setTimeout(() => setCovered(false), 600);
  }, []);

  useEffect(() => {
    const initPlayer = () => {
      if (!containerRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay:        1,
          mute:            1,
          controls:        0,
          start:           START,
          rel:             0,
          modestbranding:  1,
          iv_load_policy:  3,
          playsinline:     1,
          disablekb:       1,
          fs:              0,
          cc_load_policy:  0,
          showinfo:        0,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            e.target.seekTo(START, true);
            e.target.playVideo();
          },
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            const { PLAYING, PAUSED, ENDED } = window.YT.PlayerState;
            if (e.data === PLAYING) {
              // Video is confirmed playing — reveal it
              setTimeout(() => setCovered(false), 150);
            } else if (e.data === PAUSED) {
              // Paused (shouldn't happen but cover + resume)
              setCovered(true);
              setTimeout(() => e.target.playVideo(), 120);
            } else if (e.data === ENDED) {
              // Loop back
              setCovered(true);
              setTimeout(() => { e.target.seekTo(START, true); e.target.playVideo(); }, 80);
            } else {
              // Buffering / unstarted — keep cover on
              setCovered(true);
            }
          },
        },
      } as Record<string, unknown>);
    };

    /* Load IFrame API once */
    if (!document.getElementById("yt-iframe-api")) {
      const s = document.createElement("script");
      s.id  = "yt-iframe-api";
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev?.(); initPlayer(); };
    }

    /* Interval guard: catch any drift past END */
    const guard = setInterval(() => {
      try {
        const t = playerRef.current?.getCurrentTime();
        if (t !== undefined && t >= END - 0.3) {
          playerRef.current?.seekTo(START, true);
        }
      } catch (_) { /* ignore */ }
    }, 400);

    return () => {
      clearInterval(guard);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start overflow-hidden lg:min-h-screen"
      style={{ background: "#050a08" }}
    >
      {/* ── YouTube background (IFrame API — full JS control) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Player mount point — IFrame API injects <iframe> here */}
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "rgba(5,10,8,0.60)" }} />

        {/* ── Subtitle mask — opaque band over the bottom ~22% where burned-in Chinese text sits */}
        <div
          className="absolute inset-x-0 bottom-0 z-[2]"
          style={{ height: "22%", background: "linear-gradient(to bottom, transparent 0%, rgba(5,10,8,0.92) 40%, rgba(4,8,6,1) 100%)" }}
        />

        {/* Top cover — hides YouTube title bar on load */}
        <div
          className="absolute inset-x-0 top-0 z-[2]"
          style={{ height: "80px", background: "linear-gradient(to bottom, #050a08 50%, transparent 100%)" }}
        />

        {/* Bottom-right solid patch — covers YouTube logo */}
        <div
          className="absolute bottom-0 right-0 z-[3]"
          style={{ width: "280px", height: "70px", background: "rgba(4,8,6,1)" }}
        />

        {/* Pointer-events blocker — prevents any YouTube interaction */}
        <div className="absolute inset-0 z-[4]" />

        {/* Seamless cover — hides YouTube play button on load and during each loop seek */}
        <div
          className="absolute inset-0 z-[5] transition-opacity duration-700"
          style={{ background: "#050a08", opacity: covered ? 1 : 0, pointerEvents: "none" }}
        />
      </div>

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,244,239,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,0.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 w-full text-center pt-24 pb-10 lg:pt-[110px] lg:pb-14 flex flex-col gap-5 lg:gap-6 items-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5"
          style={{
            background: "rgba(168,133,73,0.12)",
            border: "1px solid rgba(168,133,73,0.25)",
            borderRadius: "999px",
            padding: "7px 18px",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A88549] flex-shrink-0" style={{ boxShadow: "0 0 8px #A88549" }} />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#f7f4ef]/70">
            Premium EV Transportation
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-bold leading-[1.06] tracking-tight"
          style={{ fontSize: "clamp(1.55rem, 7vw, 4.2rem)", fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="text-[#f7f4ef] block">Rwanda&apos;s Trusted Luxury</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #A88549 0%, #d4a855 52%, #A88549 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EV Transportation Partner
          </span>
        </h1>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 font-semibold px-7 py-[11px] rounded-full text-white text-[0.88rem] transition-all hover:scale-[1.04] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #A88549 0%, #c9a55a 100%)",
            boxShadow: "0 0 45px rgba(168,133,73,0.55), 0 4px 24px rgba(0,0,0,0.35)",
          }}
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book Your Ride
        </a>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="font-bold leading-none mb-1.5"
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
                  fontFamily: "var(--font-playfair), serif",
                  color: s.color,
                }}
              >
                {s.value}
              </div>
              <div className="text-[12px] text-[#f7f4ef]/45 tracking-[0.22em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#f7f4ef]/55 text-[0.82rem] leading-relaxed max-w-lg mx-auto px-2">
          Rwanda&apos;s No 1 fully electric VIP fleet. Premium comfort, zero direct emissions,
          available every day for corporate clients, individuals, and tourists.
        </p>
      </div>
    </section>
  );
}
