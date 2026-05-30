import FadeIn from "./FadeIn";

const vehicles = [
  {
    image: "https://avtopanda.by/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/2.jpg.webp",
    name: "BYD Song Plus",
    year: "2025",
    category: "Executive SUV",
    passengers: 5,
    range: "580 km",
    features: ["Premium audio", "Heated seats", "Panoramic roof", "WiFi hotspot"],
    accent: "#A88549",
    badge: "Executive SUV",
  },
  {
    image: "https://evcentral.com.au/wp-content/uploads/2025/02/Image3KiaPV5Cargo.png",
    name: "Toyota Hiace BEV",
    year: "2025",
    category: "Premium",
    passengers: 12,
    range: "350 km",
    features: ["Captain chairs", "Multi-row comfort", "USB-C all rows", "Climate control"],
    accent: "#A88549",
    badge: "Group Travel",
  },
];

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
                {/* Car photo */}
                <div className="relative h-56 overflow-hidden bg-[#f7f4ef]">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ background: "rgba(168,133,73,0.88)", color: "white" }}
                  >
                    {v.badge}
                  </div>
                </div>

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
