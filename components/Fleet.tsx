"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

type Vehicle = {
  images: string[];
  name: string;
  year: string;
  category: string;
  passengers: number;
  range: string;
  features: string[];
  badge: string;
};

const vehicles: Vehicle[] = [
  {
    images: [
      "/byd-song-plus/1.jpg", // exterior — first
      "/byd-song-plus/2.jpg", // center console
      "/byd-song-plus/3.jpg", // panoramic sunroof
      "/byd-song-plus/4.jpg", // dashboard side
      "/byd-song-plus/5.jpg", // cockpit
      "/byd-song-plus/6.png", // full dashboard
    ],
    name: "BYD Song Plus",
    year: "2025",
    category: "Executive SUV",
    passengers: 5,
    range: "580 km",
    features: ["Premium audio", "Heated seats", "Panoramic roof", "WiFi hotspot"],
    badge: "Executive SUV",
  },
  {
    images: [
      "/hiace/1.webp", // exterior — first (user-selected)
      "/hiace/2.jpeg", // cockpit / dashboard
      "/hiace/3.png",  // seating layout
      "/hiace/4.jpeg", // front seats
      "/hiace/5.png",  // rear cargo
    ],
    name: "Toyota Hiace BEV",
    year: "2025",
    category: "Premium",
    passengers: 12,
    range: "350 km",
    features: ["Captain chairs", "Multi-row comfort", "USB-C all rows", "Climate control"],
    badge: "Group Travel",
  },
];

/* ── Per-card image carousel ── */
function CarCarousel({ images, name, badge }: { images: string[]; name: string; badge: string }) {
  const [idx, setIdx] = useState(0);
  const multiple = images.length > 1;

  const go = (dir: 1 | -1) => {
    setIdx((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="relative h-56 overflow-hidden bg-[#f7f4ef] group/carousel">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${name} — view ${i + 1}`}
            className="w-full h-full object-cover object-center flex-shrink-0"
          />
        ))}
      </div>

      {/* Badge */}
      <div
        className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-sm z-10"
        style={{ background: "rgba(168,133,73,0.88)", color: "white" }}
      >
        {badge}
      </div>

      {multiple && (
        <>
          {/* Prev / Next arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-110 active:scale-95 shadow-lg"
            style={{ background: "rgba(18,40,32,0.7)", backdropFilter: "blur(6px)" }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-transform hover:scale-110 active:scale-95 shadow-lg"
            style={{ background: "rgba(18,40,32,0.7)", backdropFilter: "blur(6px)" }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === idx ? "20px" : "6px",
                  height: "6px",
                  background: i === idx ? "#A88549" : "rgba(255,255,255,0.6)",
                }}
              />
            ))}
          </div>

          {/* Image counter */}
          <div
            className="absolute bottom-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full z-10 flex items-center gap-1 shadow-lg"
            style={{ background: "rgba(18,40,32,0.7)", color: "white", backdropFilter: "blur(6px)" }}
          >
            {idx + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-28 lg:py-36 bg-[#ece8e0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header — centered */}
        <div className="text-center mb-16">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">Our Vehicles</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#122820] leading-[1.08] mb-4">
              The Fleet.{" "}
              <span style={{
                background: "linear-gradient(90deg, #A88549, #c9a55a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>All electric.</span>
            </h2>
            <p className="text-[#122820]/50 max-w-sm mx-auto text-sm leading-relaxed">
              Late-model EVs maintained to the highest standard. Every vehicle is clean, quiet, and fully charged before your ride.
            </p>
          </FadeIn>
        </div>

        {/* Vehicle grid — 2 cards, white only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {vehicles.map((v, i) => (
            <FadeIn key={v.name} delay={i * 100}>
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                style={{
                  background: "white",
                  boxShadow: "0 0 0 1px rgba(18,40,32,0.07), 0 4px 24px rgba(18,40,32,0.07)",
                }}
              >
                {/* Image carousel */}
                <CarCarousel images={v.images} name={v.name} badge={v.badge} />

                <div className="p-6">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#122820] leading-tight mb-0.5">
                    {v.name}
                  </h3>
                  <span className="text-xs text-[#122820]/40 block mb-4">
                    {v.year} &middot; {v.category}
                  </span>

                  {/* Specs */}
                  <div className="flex gap-3 mb-5">
                    {[
                      { label: "Passengers", val: String(v.passengers) },
                      { label: "Range", val: v.range },
                    ].map((sp) => (
                      <div
                        key={sp.label}
                        className="flex-1 text-center py-2.5 rounded-xl"
                        style={{ background: "rgba(168,133,73,0.07)" }}
                      >
                        <div className="text-base font-bold text-[#A88549]">{sp.val}</div>
                        <div className="text-[10px] mt-0.5 text-[#122820]/40">{sp.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 rounded-lg"
                        style={{ background: "#f7f4ef", color: "rgba(18,40,32,0.55)", border: "1px solid rgba(18,40,32,0.07)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200} direction="none">
          <p className="text-center text-xs text-[#122820]/35 mt-10">
            Fleet varies by availability. Contact us to request a specific vehicle for your booking.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
