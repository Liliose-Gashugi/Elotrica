import FadeIn from "./FadeIn";

const WA_BASE = "https://wa.me/250788458897?text=Hello%20Elotrica%2C%20I%27m%20interested%20in%20";

const services = [
  {
    number: "01",
    tag: "Corporate",
    title: "Corporate VIP",
    description:
      "Dedicated fleet and executive-class drivers for businesses and teams. Priority scheduling, monthly invoicing, and seamless coordination for high-demand corporate travel.",
    features: ["Dedicated account manager", "Priority dispatch", "Executive comfort class", "Monthly invoicing"],
    cta: "Corporate VIP Service",
    accentFrom: "#A88549",
    accentTo: "#8a6c38",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "Personal",
    title: "Individual & Leisure",
    description:
      "Premium transportation for special occasions, airport pick-ups, and everyday travel. Your schedule, your comfort — no compromises.",
    features: ["Airport transfers", "Special occasion hire", "Hourly charter", "Child seat on request"],
    cta: "Individual Service",
    accentFrom: "#2d7a60",
    accentTo: "#1a5a47",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "Tourism",
    title: "Visitor & Tourist",
    description:
      "Discover Rwanda with a knowledgeable driver and a pristine EV. Gorilla treks, city tours, and multi-day itineraries — all stress-free.",
    features: ["Gorilla trekking transfers", "Kigali city tours", "Multi-day packages", "Local guide integration"],
    cta: "Tourist Package",
    accentFrom: "#A88549",
    accentTo: "#8a6c38",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-[#f7f4ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header — centered */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">What We Offer</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#122820] leading-[1.08] mb-4">
              Services built for{" "}
              <span style={{
                background: "linear-gradient(90deg, #A88549, #c9a55a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                your every journey.
              </span>
            </h2>
            <p className="text-[#122820]/55 max-w-sm mx-auto text-base leading-relaxed">
              Three premium tiers. One standard — extraordinary. Choose what fits your travel, and let us handle the rest.
            </p>
          </FadeIn>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 120} direction="up">
              <div
                className="group relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: s.featured ? "#122820" : "white",
                  boxShadow: s.featured
                    ? "0 0 0 1px rgba(45,122,96,0.3), 0 20px 60px rgba(18,40,32,0.25)"
                    : "0 0 0 1px rgba(18,40,32,0.07), 0 4px 20px rgba(18,40,32,0.06)",
                }}
              >
                {/* Top accent gradient bar */}
                <div
                  className="h-1 w-full flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, ${s.accentFrom}, ${s.accentTo})` }}
                />

                {/* Number watermark */}
                <div
                  className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
                  style={{
                    color: s.featured ? "rgba(45,122,96,0.08)" : "rgba(18,40,32,0.04)",
                    fontFamily: "var(--font-playfair), serif",
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                </div>

                {s.featured && (
                  <div className="absolute top-8 right-6 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-[#2d7a60] bg-[#2d7a60]/12 px-2.5 py-1 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-[#2d7a60]" />
                    Popular
                  </div>
                )}

                <div className="flex flex-col flex-1 p-7 pt-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${s.accentFrom}22, ${s.accentFrom}10)`,
                      color: s.accentFrom,
                    }}
                  >
                    {s.icon}
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5" style={{ color: s.accentFrom }}>
                    {s.tag}
                  </span>

                  <h3
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: s.featured ? "#f7f4ef" : "#122820" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: s.featured ? "rgba(247,244,239,0.55)" : "rgba(18,40,32,0.55)" }}
                  >
                    {s.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`${WA_BASE}${encodeURIComponent(s.cta)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full text-sm font-semibold px-5 py-3.5 rounded-xl transition-all hover:gap-3 group/btn"
                    style={
                      s.featured
                        ? {
                            background: `linear-gradient(135deg, ${s.accentFrom}, ${s.accentTo})`,
                            color: "white",
                            boxShadow: `0 4px 16px ${s.accentFrom}40`,
                          }
                        : {
                            background: `${s.accentFrom}12`,
                            color: s.accentFrom,
                          }
                    }
                  >
                    <span>Enquire Now</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


