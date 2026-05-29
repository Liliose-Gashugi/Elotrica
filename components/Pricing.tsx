import FadeIn from "./FadeIn";

const WA_BASE = "https://wa.me/250780498807?text=Hello%20Elotrica%2C%20I%27d%20like%20to%20enquire%20about%20";

const plans = [
  {
    name: "Per Trip",
    tag: "One-off",
    price: "From RWF 8,000",
    unit: "per ride",
    blurb: "Single trips, airport transfers, and one-off journeys. Pay only for what you need.",
    features: ["Sedan or SUV", "Up to 4 passengers", "Professional driver", "No subscription"],
    cta: "Per-Trip Booking",
    accent: "#A88549",
  },
  {
    name: "Hourly Charter",
    tag: "Most Flexible",
    price: "From RWF 15,000",
    unit: "per hour",
    blurb: "Keep a car at your disposal for meetings, events, and multi-stop days. Minimum 2 hours.",
    features: ["Min. 2-hr booking", "All vehicle classes", "Waiting included", "Multiple stops"],
    cta: "Hourly Charter",
    accent: "#2d7a60",
    featured: true,
  },
  {
    name: "Corporate",
    tag: "Enterprise",
    price: "Custom",
    unit: "monthly",
    blurb: "Dedicated fleet and priority dispatch for businesses with regular, high-volume transport needs.",
    features: ["Account manager", "Priority dispatch", "Monthly invoicing", "Analytics reports"],
    cta: "Corporate Plan",
    accent: "#A88549",
  },
];

const routes = [
  { from: "Airport", to: "City Centre", price: "RWF 8k â€“ 12k", time: "~25 min" },
  { from: "Kigali", to: "Musanze (Gorillas)", price: "RWF 60k â€“ 80k", time: "~2.5 hrs" },
  { from: "Hotel", to: "CHUK / Hospital", price: "RWF 5k â€“ 8k", time: "~15 min" },
  { from: "Full-day", to: "Kigali City Tour", price: "RWF 80k â€“ 120k", time: "8 hrs" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-36 bg-[#f7f4ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header â€” centered */}
        <div className="text-center mb-16">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">Pricing</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#122820] leading-[1.08] mb-4">
              Honest pricing,{" "}
              <span style={{
                background: "linear-gradient(90deg, #A88549, #c9a55a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                zero surprises.
              </span>
            </h2>
            <p className="text-[#122820]/50 max-w-sm mx-auto text-sm leading-relaxed">
              Every price is confirmed before your ride begins. No hidden fees, no last-minute add-ons.
            </p>
          </FadeIn>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 100}>
              <div
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                style={
                  p.featured
                    ? {
                        background: "#122820",
                        boxShadow: "0 0 0 1px rgba(45,122,96,0.3), 0 20px 60px rgba(18,40,32,0.25)",
                      }
                    : {
                        background: "white",
                        boxShadow: "0 0 0 1px rgba(18,40,32,0.07), 0 4px 20px rgba(18,40,32,0.05)",
                      }
                }
              >
                {/* Top accent */}
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

                {p.featured && (
                  <div className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#2d7a60] bg-[#2d7a60]/12 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#2d7a60]" />
                    {p.tag}
                  </div>
                )}

                <div className="flex flex-col flex-1 p-7">
                  <span
                    className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1"
                    style={{ color: p.accent }}
                  >
                    {!p.featured ? p.tag : ""}
                  </span>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: p.featured ? "#f7f4ef" : "#122820" }}
                  >
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-3 mb-1">
                    <span className="text-2xl font-bold" style={{ color: p.accent, fontFamily: "var(--font-playfair), serif" }}>
                      {p.price}
                    </span>
                  </div>
                  <span className="text-xs mb-4" style={{ color: p.featured ? "rgba(247,244,239,0.35)" : "rgba(18,40,32,0.35)" }}>
                    / {p.unit}
                  </span>

                  <p className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: p.featured ? "rgba(247,244,239,0.5)" : "rgba(18,40,32,0.5)" }}
                  >
                    {p.blurb}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${p.accent}20`, color: p.accent }}
                        >
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span style={{ color: p.featured ? "rgba(247,244,239,0.65)" : "rgba(18,40,32,0.65)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${WA_BASE}${encodeURIComponent(p.cta)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-xl transition-all hover:opacity-90 active:scale-95 group/btn"
                    style={
                      p.featured
                        ? {
                            background: `linear-gradient(135deg, ${p.accent}, ${p.accent}bb)`,
                            color: "white",
                            boxShadow: `0 4px 16px ${p.accent}40`,
                          }
                        : {
                            background: `${p.accent}12`,
                            color: p.accent,
                          }
                    }
                  >
                    Get a Quote
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Sample routes */}
        <FadeIn delay={150}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "white", boxShadow: "0 0 0 1px rgba(18,40,32,0.07), 0 4px 20px rgba(18,40,32,0.05)" }}
          >
            <div className="px-7 py-5 border-b border-[#ece8e0]">
              <h3 className="text-base font-bold text-[#122820]">Sample Route Estimates</h3>
              <p className="text-xs text-[#122820]/40 mt-0.5">Real prices confirmed on booking Â· varies by vehicle & demand</p>
            </div>
            <div className="divide-y divide-[#ece8e0]">
              {routes.map((r) => (
                <div key={r.from + r.to} className="flex items-center justify-between px-7 py-4 hover:bg-[#f7f4ef]/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2d7a60]" />
                      <div className="w-px h-4 bg-[#122820]/15" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A88549]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#122820]">{r.from} â†’ {r.to}</div>
                      <div className="text-xs text-[#122820]/40">{r.time}</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#2d7a60]">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

