import FadeIn from "./FadeIn";

const vehicles = [
  {
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=420&fit=crop&auto=format&q=80",
    name: "Tesla Model 3",
    year: "2023",
    category: "Premium Sedan",
    passengers: 4,
    range: "570 km",
    features: ["Autopilot assist", "Panoramic roof", "Climate control", "WiFi hotspot"],
    accent: "#A88549",
    badge: "Airport Transfers",
  },
  {
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=420&fit=crop&auto=format&q=80",
    name: "Tesla Model Y",
    year: "2023",
    category: "Executive SUV",
    passengers: 5,
    range: "530 km",
    features: ["Premium audio", "Heated seats", "Cargo space", "WiFi hotspot"],
    accent: "#2d7a60",
    badge: "Most Popular",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=800&h=420&fit=crop&auto=format&q=80",
    name: "BYD Han EV",
    year: "2024",
    category: "Luxury Sedan",
    passengers: 4,
    range: "605 km",
    features: ["Nappa leather", "4-zone climate", "Privacy glass", "Flagship audio"],
    accent: "#A88549",
    badge: "Executive",
  },
  {
    image: "https://images.unsplash.com/photo-1676754568744-7852efc67c40?w=800&h=420&fit=crop&auto=format&q=80",
    name: "BYD Tang EV",
    year: "2024",
    category: "7-Seat Luxury SUV",
    passengers: 7,
    range: "505 km",
    features: ["Captain chairs", "3-row comfort", "USB-C all rows", "Sunroof"],
    accent: "#2d7a60",
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

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vehicles.map((v, i) => (
            <FadeIn key={v.name} delay={i * 100}>
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5"
                style={{
                  background: v.featured ? "#122820" : "white",
                  boxShadow: v.featured
                    ? `0 0 0 1px rgba(45,122,96,0.25), 0 20px 50px rgba(18,40,32,0.2)`
                    : "0 0 0 1px rgba(18,40,32,0.07), 0 4px 20px rgba(18,40,32,0.05)",
                }}
              >
                {/* Visual area — real car photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge only — no dark overlay */}
                  <div
                    className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ background: `${v.accent}cc`, color: "white" }}
                  >
                    {v.badge}
                  </div>
                </div>

                <div className="p-6">
                  {/* Name row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold leading-tight"
                        style={{ color: v.featured ? "#f7f4ef" : "#122820" }}
                      >
                        {v.name}
                      </h3>
                      <span
                        className="text-xs mt-0.5 block"
                        style={{ color: v.featured ? "rgba(247,244,239,0.4)" : "rgba(18,40,32,0.4)" }}
                      >
                        {v.year} · {v.category}
                      </span>
                    </div>
                  </div>

                  {/* Specs pills */}
                  <div className="flex gap-3 mb-5">
                    {[
                      { label: "Passengers", val: v.passengers },
                      { label: "Range", val: v.range },
                      { label: "CO₂", val: "0 kg" },
                    ].map((sp) => (
                      <div
                        key={sp.label}
                        className="flex-1 text-center py-2.5 rounded-xl"
                        style={{
                          background: v.featured ? "rgba(247,244,239,0.06)" : `${v.accent}0d`,
                        }}
                      >
                        <div className="text-base font-bold" style={{ color: v.accent }}>
                          {sp.val}
                        </div>
                        <div
                          className="text-[10px] mt-0.5"
                          style={{ color: v.featured ? "rgba(247,244,239,0.35)" : "rgba(18,40,32,0.4)" }}
                        >
                          {sp.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-2.5 py-1 rounded-lg"
                        style={
                          v.featured
                            ? { background: "rgba(247,244,239,0.08)", color: "rgba(247,244,239,0.55)" }
                            : { background: "#f7f4ef", color: "rgba(18,40,32,0.55)", border: "1px solid rgba(18,40,32,0.07)" }
                        }
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
