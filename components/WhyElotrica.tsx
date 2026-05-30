import FadeIn from "./FadeIn";

const items = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Zero Emissions",
    body: "100% electric fleet. Every ride is carbon-neutral at the wheel — travel with a conscience, arrive in style.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Professional Drivers",
    body: "Vetted, trained, and committed to VIP service standards. Your safety and comfort are non-negotiable.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Availability",
    body: "Early flights, late events, last-minute bookings. We are always on — no waiting, no excuses.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Transparent Pricing",
    body: "No hidden fees. Clear rates, honest quotes. You always know what you're paying before you step in.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Safety First",
    body: "Top-tier maintenance schedules, full insurance, and regular inspections. Every trip is worry-free.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Rwanda Expertise",
    body: "Born in Kigali. Our drivers know every road, shortcut, and experience Rwanda has to offer — so you explore more.",
  },
];

export default function WhyElotrica() {
  return (
    <section id="why" className="py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2820 0%, #122820 50%, #0a1f1a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header — centered */}
        <div className="text-center mb-16">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">Why Choose Us</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#f7f4ef] leading-[1.08] mb-4">
              The Elotrica{" "}
              <span style={{
                background: "linear-gradient(90deg, #A88549, #d4a855)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                difference.
              </span>
            </h2>
            <p className="text-[#f7f4ef]/40 max-w-sm mx-auto text-sm leading-relaxed">
              Sustainable tech meets uncompromising luxury. Six reasons why discerning travelers choose Elotrica.
            </p>
          </FadeIn>
        </div>

        {/* Bento grid — equal height boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ gridAutoRows: "1fr" }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80} className="h-full">
              <div
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-400 hover:-translate-y-1 cursor-default h-full"
                style={{
                  background: i % 3 === 0
                    ? "rgba(168,133,73,0.07)"
                    : i % 3 === 1
                    ? "rgba(45,122,96,0.07)"
                    : "rgba(247,244,239,0.04)",
                  border: "1px solid rgba(247,244,239,0.07)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                  style={{
                    background: i % 2 === 0
                      ? "radial-gradient(circle at 30% 30%, rgba(168,133,73,0.08), transparent 70%)"
                      : "radial-gradient(circle at 70% 30%, rgba(45,122,96,0.08), transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(168,133,73,0.12)", color: "#A88549" }}
                >
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-[#f7f4ef] mb-2">{item.title}</h3>
                <p className="text-sm text-[#f7f4ef]/45 leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
