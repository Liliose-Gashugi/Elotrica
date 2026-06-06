"use client";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Patrick Nkurunziza",
    role: "CEO, TechHub Kigali",
    quote: "Elotrica transformed how our executive team moves around the city. Immaculate vehicles, professional drivers, and knowing we're cutting our carbon footprint makes it even better.",
    stars: 5,
    segment: "Corporate",
    initials: "PN",
    color: "#A88549",
  },
  {
    name: "Sophie Müller",
    role: "Travel Blogger, Wanderlust Africa",
    quote: "The most seamless, luxurious transfer experience I've had across East Africa. The Tesla was spotless and the driver knew every corner of Kigali.",
    stars: 5,
    segment: "Tourist",
    initials: "SM",
    color: "#2d7a60",
  },
  {
    name: "Jean Claude Habimana",
    role: "Country Director, NGO Rwanda",
    quote: "We use Elotrica for all VIP guest transfers. Their reliability and professionalism reflect well on our organization. Five-star service every time.",
    stars: 5,
    segment: "Corporate",
    initials: "JC",
    color: "#A88549",
  },
  {
    name: "Amira Hassan",
    role: "Leisure Traveler, Dubai UAE",
    quote: "Booked Elotrica for my whole week in Rwanda — gorilla trekking, city tours, everything. WhatsApp booking made it incredibly easy.",
    stars: 5,
    segment: "Leisure",
    initials: "AH",
    color: "#2d7a60",
  },
  {
    name: "Dr. Nadia Kamau",
    role: "Medical Consultant, King Faisal Hospital",
    quote: "I travel extensively for work and need transport I can count on. Elotrica has never been late. Clean cars, fast booking — exactly what I need.",
    stars: 5,
    segment: "Individual",
    initials: "NK",
    color: "#A88549",
  },
  {
    name: "Marcus Osei",
    role: "Investment Director, Pan-Africa Capital",
    quote: "Premium EV rides with professional service — I book Elotrica every time I'm in Kigali. The Tesla Model Y is a treat after a long flight.",
    stars: 5,
    segment: "Corporate",
    initials: "MO",
    color: "#2d7a60",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[360px] rounded-2xl p-6 mx-3 select-none"
      style={{
        background: "rgba(247,244,239,0.05)",
        border: "1px solid rgba(247,244,239,0.09)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.stars }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5" fill="#A88549" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(247,244,239,0.6)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold leading-tight text-[#f7f4ef]">{t.name}</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(247,244,239,0.35)" }}>{t.role}</div>
        </div>
        <span
          className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ background: `${t.color}18`, color: t.color }}
        >
          {t.segment}
        </span>
      </div>
    </div>
  );
}

const loop = [...testimonials, ...testimonials];

export default function Testimonials() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeRef = useRef<(delay?: number) => void>(() => {});

  // Auto-scroll + manual drag/wheel/swipe, seamless infinite loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let resumeTimer: ReturnType<typeof setTimeout>;
    const SPEED = 0.5; // px per frame

    // Drag state
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const half = () => track.scrollWidth / 2;

    // Keep scrollLeft within [0, half) for seamless looping
    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      if (track.scrollLeft >= h) track.scrollLeft -= h;
      else if (track.scrollLeft < 0) track.scrollLeft += h;
    };

    const tick = () => {
      if (!pausedRef.current) {
        track.scrollLeft += SPEED;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause auto-scroll, resume after idle
    const pause = () => { pausedRef.current = true; clearTimeout(resumeTimer); };
    const scheduleResume = (delay = 1800) => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { pausedRef.current = false; }, delay);
    };
    resumeRef.current = scheduleResume; // expose for arrow nav

    // Hover pause (desktop)
    const onEnter = () => pause();
    const onLeave = () => { if (!isDown) scheduleResume(300); };

    // Wheel → horizontal scroll
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      pause();
      track.scrollLeft += delta;
      wrap();
      scheduleResume();
    };

    // Pointer drag
    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      pause();
      track.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startScroll - dx;
      wrap();
    };
    const onPointerUp = () => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = "grab";
      scheduleResume();
    };
    // Prevent click-through after a drag
    const onClickCapture = (e: MouseEvent) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    };

    // Touch is handled natively via overflow-x; just pause/resume
    const onTouchStart = () => pause();
    const onTouchEnd = () => scheduleResume();

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    track.addEventListener("click", onClickCapture, true);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("scroll", wrap, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("click", onClickCapture, true);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("scroll", wrap);
    };
  }, []);

  // Arrow nav — pause auto-scroll so the smooth scroll isn't overridden
  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    pausedRef.current = true;
    track.scrollBy({ left: dir * 380, behavior: "smooth" });
    resumeRef.current(1800); // resume auto-scroll after idle
  };

  return (
    <section id="testimonials" className="py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a1f1a, #122820 50%, #0d2820)" }}
    >
      {/* Header — centered */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-14 text-center">
        <FadeIn direction="none">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">Social Proof</span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#f7f4ef] leading-[1.08] mb-4">
            Real words.{" "}
            <span style={{
              background: "linear-gradient(90deg, #A88549, #d4a855)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Real clients.
            </span>
          </h2>
          <p className="text-[#f7f4ef]/35 max-w-sm mx-auto text-sm leading-relaxed">
            Corporate executives, tourists, and repeat travelers — here&apos;s what they say about riding with Elotrica.
          </p>
        </FadeIn>
      </div>

      {/* Draggable / scrollable marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0d2820, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0d2820, transparent)" }} />

        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto no-scrollbar cursor-grab"
          style={{ scrollbarWidth: "none" }}
        >
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => nudge(-1)}
          aria-label="Scroll left"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{ background: "rgba(247,244,239,0.07)", border: "1px solid rgba(247,244,239,0.12)" }}
        >
          <svg className="w-5 h-5 text-[#f7f4ef]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => nudge(1)}
          aria-label="Scroll right"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{ background: "rgba(247,244,239,0.07)", border: "1px solid rgba(247,244,239,0.12)" }}
        >
          <svg className="w-5 h-5 text-[#f7f4ef]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
        <FadeIn delay={100} direction="none">
          <p className="text-center text-[#f7f4ef]/20 text-xs">
            ⭐ Find us on Google Reviews · Search &quot;Elotrica Kigali&quot;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
