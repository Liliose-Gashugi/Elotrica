"use client";
import { useEffect, useRef, useState } from "react";
import BookingButton from "./BookingButton";

const stats = [
  { value: "100%", label: "Electric", color: "#A88549" },
  { value: "24/7",  label: "Available", color: "#f7f4ef" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => setVideoReady(true);
    v.addEventListener("playing", onPlaying);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlaying);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start overflow-hidden lg:min-h-screen"
      style={{ background: "#050a08" }}
    >
      {/* ── Local video — loops whole clip, no external UI ── */}
      <div
        className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000"
        style={{ opacity: videoReady ? 1 : 0 }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(5,10,8,0.55)" }} />

      {/* ── RBA logo mask — top-right corner ── */}
      <div
        className="absolute top-0 right-0 z-[2]"
        style={{ width: "240px", height: "110px", background: "linear-gradient(225deg, #050a08 0%, #050a08 32%, transparent 78%)" }}
      />

      {/* Top edge fade — blends RBA mask into the scene */}
      <div
        className="absolute top-0 inset-x-0 z-[2]"
        style={{ height: "80px", background: "linear-gradient(to bottom, rgba(5,10,8,0.7) 0%, transparent 100%)" }}
      />

      {/* ── Clideo watermark mask — bottom-right corner ── */}
      <div
        className="absolute bottom-0 right-0 z-[3]"
        style={{ width: "340px", height: "170px", background: "linear-gradient(315deg, #050a08 0%, #050a08 42%, rgba(5,10,8,0.85) 62%, transparent 85%)" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 z-[2]"
        style={{ height: "22%", background: "linear-gradient(to bottom, transparent 0%, rgba(4,8,6,0.92) 85%, rgba(4,8,6,1) 100%)" }}
      />

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
        <BookingButton
          className="group inline-flex items-center gap-3 font-semibold px-7 py-[11px] rounded-full text-white text-[0.88rem] transition-all hover:scale-[1.04] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #A88549 0%, #c9a55a 100%)",
            boxShadow: "0 0 45px rgba(168,133,73,0.55), 0 4px 24px rgba(0,0,0,0.35)",
          }}
        >
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Reserve Your Journey
        </BookingButton>

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
