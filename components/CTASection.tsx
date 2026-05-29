import FadeIn from "./FadeIn";

const WA_LINK =
  "https://wa.me/250780498807?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.%20Here%20are%20my%20details%3A%0AService%3A%20%0ADate%20%26%20Time%3A%20%0APickup%3A%20%0ADropoff%3A%20%0APassengers%3A%20";

const perks = ["No booking fee", "Instant reply", "24/7 support", "Zero emissions"];

export default function CTASection() {
  return (
    <section id="booking" className="py-28 lg:py-36 bg-[#f7f4ef] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <FadeIn direction="none">
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 lg:px-16 lg:py-20 text-center"
            style={{
              background: "linear-gradient(145deg, #0d2820 0%, #122820 60%, #1a3d30 100%)",
              boxShadow: "0 0 0 1px rgba(45,122,96,0.2), 0 30px 80px rgba(18,40,32,0.35)",
            }}
          >
            {/* Background glow blobs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "#A88549" }} />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: "#2d7a60" }} />

            <div className="relative z-10">
              {/* Pill label */}
              <div className="inline-flex items-center gap-2 mb-6"
                style={{
                  background: "rgba(45,122,96,0.15)",
                  border: "1px solid rgba(45,122,96,0.25)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a60]" style={{ boxShadow: "0 0 6px #2d7a60" }} />
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#f7f4ef]/55">Ready to ride?</span>
              </div>

              <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-[#f7f4ef] leading-[1.1] mb-5">
                Book your next
                <br />
                <span style={{
                  background: "linear-gradient(90deg, #A88549, #d4a855)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  premium ride.
                </span>
              </h2>

              <p className="text-[#f7f4ef]/45 max-w-md mx-auto text-base leading-relaxed mb-8">
                Reach out via WhatsApp and our team confirms your booking in minutes. Available every day, for every journey.
              </p>

              {/* Perks */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {perks.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-1.5 text-xs text-[#f7f4ef]/55 px-3.5 py-2 rounded-full"
                    style={{ background: "rgba(247,244,239,0.06)", border: "1px solid rgba(247,244,239,0.08)" }}
                  >
                    <svg className="w-3 h-3 text-[#2d7a60]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </div>
                ))}
              </div>

              {/* Main button */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-lg text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #2d7a60 0%, #1a5a47 100%)",
                  boxShadow: "0 0 40px rgba(45,122,96,0.45), 0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Your Ride Now
              </a>

              <p className="text-[#f7f4ef]/20 text-xs mt-4">
                Replies in under 5 min Â· Available daily 5:00 AM â€“ 11:00 PM
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

