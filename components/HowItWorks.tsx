import FadeIn from "./FadeIn";

const WA_LINK = "https://wa.me/250780498807?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.";

const steps = [
  {
    n: "01",
    title: "Pick your service",
    body: "Choose Corporate, Individual, or Tourist. Tell us how many passengers and what vehicle class you prefer.",
    accent: "#A88549",
  },
  {
    n: "02",
    title: "Set the details",
    body: "Date, time, pickup, and destination. That's all we need. Multi-stop? No problem.",
    accent: "#2d7a60",
  },
  {
    n: "03",
    title: "Message us on WhatsApp",
    body: "Send us your booking details via WhatsApp. Our team reviews and confirms in minutes.",
    accent: "#A88549",
    highlight: true,
  },
  {
    n: "04",
    title: "Get your confirmation",
    body: "We send driver details, vehicle info, and final price â€” all on WhatsApp before your ride.",
    accent: "#2d7a60",
  },
  {
    n: "05",
    title: "Ride in luxury",
    body: "Your driver arrives on time in a spotless EV. Sit back. Enjoy the ride.",
    accent: "#A88549",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2820 0%, #122820 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#2d7a60] uppercase block mb-4">Simple Process</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#f7f4ef] leading-[1.08] mb-4">
              How it works.
            </h2>
            <p className="text-[#f7f4ef]/40 max-w-sm mx-auto text-sm leading-relaxed">
              Five steps. Ten minutes to book. Then we handle everything else.
            </p>
          </FadeIn>
        </div>

        {/* Steps â€” vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[#A88549]/0 via-[#A88549]/20 to-[#A88549]/0 hidden sm:block" />

          <div className="space-y-2">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 100} direction="left">
                <div
                  className="group relative flex items-start gap-6 sm:gap-8 p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] cursor-default"
                >
                  {/* Step number circle */}
                  <div
                    className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all group-hover:scale-110"
                    style={
                      s.highlight
                        ? { background: `linear-gradient(135deg, ${s.accent}, #1a5a47)`, color: "white", boxShadow: `0 0 18px ${s.accent}50` }
                        : { background: `${s.accent}18`, color: s.accent, border: `1px solid ${s.accent}30` }
                    }
                  >
                    {s.n}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1.5">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-base font-bold text-[#f7f4ef]">{s.title}</h3>
                      {s.highlight && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-[#2d7a60] bg-[#2d7a60]/12 px-2 py-0.5 rounded-full">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#f7f4ef]/40 leading-relaxed">{s.body}</p>
                  </div>

                  {/* Right step number (decorative) */}
                  <div
                    className="hidden lg:block flex-shrink-0 text-5xl font-black select-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: `${s.accent}15`, fontFamily: "var(--font-playfair), serif", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={300} direction="none">
          <div className="mt-16 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full text-base text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #2d7a60, #1a5a47)",
                boxShadow: "0 0 30px rgba(45,122,96,0.35), 0 4px 16px rgba(0,0,0,0.25)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Booking on WhatsApp
            </a>
            <p className="text-[#f7f4ef]/25 text-xs mt-3">Typically confirmed in under 5 minutes</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

