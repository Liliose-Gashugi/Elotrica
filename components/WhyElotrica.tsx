import FadeIn from "./FadeIn";

const items = [
  {
    icon: "⚡",
    title: "Zero Emissions",
    body: "100% electric fleet. Every ride is carbon-neutral at the wheel — travel with a conscience, arrive in style.",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "🏅",
    title: "Professional Drivers",
    body: "Vetted, trained, and committed to VIP service standards. Your safety and comfort are non-negotiable.",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "🕐",
    title: "24/7 Availability",
    body: "Early flights, late events, last-minute bookings. We are always on — no waiting, no excuses.",
    span: "col-span-1 md:col-span-2 row-span-1",
    wide: true,
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    body: "No hidden fees. Clear rates, honest quotes. You always know what you're paying before you step in.",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    body: "Top-tier maintenance schedules, full insurance, and regular inspections. Every trip is worry-free.",
    span: "col-span-1 row-span-1",
  },
  {
    icon: "🌍",
    title: "Rwanda Expertise",
    body: "Born in Kigali. Our drivers know every road, shortcut, and experience Rwanda has to offer — so you explore more.",
    span: "col-span-1 md:col-span-2 row-span-1",
    wide: true,
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
                <div className="text-4xl mb-5 select-none group-hover:scale-110 transition-transform inline-block">
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
