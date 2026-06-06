"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import BookingButton from "./BookingButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Gallery", href: "#gallery" },
];

const WA_LINK = `https://wa.me/250788458897?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.`;

// Sections with light backgrounds — navbar must switch to dark text over these
const LIGHT_SECTIONS = ["services", "fleet", "booking"];
const DARK_SECTIONS  = ["hero", "why", "how", "testimonials", "footer"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [onLight, setOnLight]   = useState(false);

  useEffect(() => {
    // Scroll depth
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section theme detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (LIGHT_SECTIONS.includes(id)) setOnLight(true);
          if (DARK_SECTIONS.includes(id))  setOnLight(false);
        });
      },
      // Fire when a section top crosses 72 px (navbar height) from the top
      { rootMargin: "-72px 0px -45% 0px", threshold: 0 }
    );

    [...LIGHT_SECTIONS, ...DARK_SECTIONS].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // ── Style tokens based on current section theme ──────────────────────────
  const bg = onLight
    ? scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.80)"
    : scrolled ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.10)";

  const border = onLight
    ? "1px solid rgba(18,40,32,0.10)"
    : "1px solid rgba(255,255,255,0.18)";

  const shadow = scrolled
    ? onLight
      ? "0 4px 32px rgba(0,0,0,0.10)"
      : "0 4px 32px rgba(0,0,0,0.14)"
    : "none";

  const linkClass = onLight
    ? "text-sm font-medium px-4 py-2 rounded-lg transition-all text-[#122820] hover:text-[#A88549] hover:bg-black/5"
    : "text-sm font-medium px-4 py-2 rounded-lg transition-all text-[#f7f4ef] hover:text-[#A88549] hover:bg-white/10";

  const burgerColor = onLight ? "bg-[#122820]" : "bg-[#f7f4ef]";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: bg,
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: border,
        boxShadow: shadow,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <a href="#hero" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo height="h-[20px]" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <BookingButton
          className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 text-white"
          style={{
            background: "linear-gradient(135deg, #2d7a60, #1a5a47)",
            boxShadow: "0 0 20px rgba(45,122,96,0.35)",
          }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Reserve Now
        </BookingButton>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px transition-all duration-300 ${burgerColor} ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${burgerColor} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px transition-all duration-300 ${burgerColor} ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "400px" : "0px" }}>
        <div
          className="px-6 py-6 space-y-1"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(18,40,32,0.08)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[#122820]/80 hover:text-[#A88549] py-2.5 text-sm transition-colors border-b border-black/5 font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4">
            <BookingButton
              className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full w-full text-white"
              style={{ background: "linear-gradient(135deg, #2d7a60, #1a5a47)" }}
            >
              Reserve Your Journey
            </BookingButton>
          </div>
        </div>
      </div>
    </header>
  );
}
