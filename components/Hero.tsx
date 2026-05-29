"use client";

const WA_LINK = `https://wa.me/250780498807?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.%20Here%20are%20my%20details%3A%0AService%3A%20%0ADate%20%26%20Time%3A%20%0APickup%3A%20%0ADropoff%3A%20`;

function WheelSpokes({ cx, cy, r1, r2 }: { cx: number; cy: number; r1: number; r2: number }) {
  return (
    <>
      {[0, 51.4, 102.9, 154.3, 205.7, 257.1].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={cx + r1 * Math.cos(rad)} y1={cy + r1 * Math.sin(rad)}
            x2={cx + r2 * Math.cos(rad)} y2={cy + r2 * Math.sin(rad)}
            stroke="#A88549" strokeWidth="2.2" opacity="0.65"
          />
        );
      })}
    </>
  );
}

function EVCarSVG() {
  return (
    <svg
      viewBox="0 0 780 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <filter id="g-glow" x="-14%" y="-14%" width="128%" height="128%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="g-gold" x="-18%" y="-18%" width="136%" height="136%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="g-strong" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Dark glossy body â€” looks like a real dark car */}
        <linearGradient id="g-body" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#1e2b24" stopOpacity="0.97" />
          <stop offset="55%" stopColor="#111a14" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#090e0b" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="g-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e1f18" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#081410" stopOpacity="0.95" />
        </linearGradient>
        {/* Roof light streak */}
        <linearGradient id="g-roof-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="0.09" />
          <stop offset="65%" stopColor="white" stopOpacity="0.09" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Hood light streak */}
        <linearGradient id="g-hood-shine" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.07" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Ground glow */}
        <radialGradient id="g-ground" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#f7f4ef" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#A88549" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#A88549" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* â”€â”€ GROUND â”€â”€ */}
      <ellipse cx="392" cy="378" rx="320" ry="24" fill="url(#g-ground)" />
      <ellipse cx="392" cy="370" rx="296" ry="13" fill="rgba(0,0,0,0.7)" />
      <line x1="55" y1="370" x2="725" y2="370" stroke="rgba(247,244,239,0.06)" strokeWidth="0.7" />

      {/* â”€â”€ MAIN BODY â”€â”€ */}
      <path
        d="
          M 34,285
          C 32,297 36,309 54,313
          L 134,313
          A 52,43 0 0 0 238,313
          L 526,313
          A 52,43 0 0 0 630,313
          C 656,313 686,301 710,287
          C 726,273 732,255 730,239
          L 724,217
          C 716,203 704,195 692,191
          L 652,151
          C 637,137 618,129 596,127
          L 352,127
          C 322,127 306,131 292,141
          L 264,167
          C 252,180 240,191 218,197
          L 153,217
          C 118,225 86,235 60,251
          C 42,261 32,273 34,285
          Z
        "
        fill="url(#g-body)"
        stroke="rgba(247,244,239,0.08)"
        strokeWidth="1"
      />

      {/* â”€â”€ ROOF HIGHLIGHT (reflected light) â”€â”€ */}
      <path
        d="M 300,127 C 380,124 490,124 596,127 L 590,138 C 490,135 380,135 306,138 Z"
        fill="url(#g-roof-shine)"
      />

      {/* â”€â”€ HOOD HIGHLIGHT â”€â”€ */}
      <path
        d="M 60,253 C 100,241 145,228 175,214 C 200,209 226,202 255,196 L 250,188 C 220,194 192,202 165,208 C 135,220 95,233 55,245 Z"
        fill="url(#g-hood-shine)"
      />

      {/* â”€â”€ CABIN / GREENHOUSE â”€â”€ */}
      <path
        d="
          M 267,165
          C 278,147 300,133 330,127
          L 596,127
          C 618,127 636,137 650,151
          L 690,191
        "
        fill="url(#g-glass)"
        stroke="rgba(247,244,239,0.1)"
        strokeWidth="1"
      />

      {/* Windshield */}
      <path
        d="M 270,163 L 300,139 L 398,127 L 392,165 C 360,166 316,166 270,163 Z"
        fill="rgba(14,22,18,0.92)"
        stroke="rgba(247,244,239,0.06)"
        strokeWidth="0.8"
      />
      {/* Windshield glare */}
      <path
        d="M 318,130 L 360,128 L 355,155 C 342,155 326,156 310,157 Z"
        fill="rgba(255,255,255,0.04)"
      />

      {/* Rear glass */}
      <path
        d="M 600,129 C 619,129 636,138 650,152 L 686,191 L 635,191 L 598,129 Z"
        fill="rgba(14,22,18,0.92)"
        stroke="rgba(247,244,239,0.06)"
        strokeWidth="0.8"
      />

      {/* B-pillar */}
      <line x1="434" y1="127" x2="428" y2="195" stroke="rgba(247,244,239,0.12)" strokeWidth="1.5" />

      {/* Door character line */}
      <path
        d="M 216,253 C 292,247 372,245 452,245 C 524,245 580,247 636,255"
        stroke="rgba(247,244,239,0.07)"
        strokeWidth="1"
      />

      {/* Lower body crease */}
      <path
        d="M 80,282 C 200,278 380,277 560,278 C 618,278 660,280 700,284"
        stroke="rgba(247,244,239,0.04)"
        strokeWidth="0.8"
      />

      {/* â”€â”€ HEADLIGHT â€” gold DRL â”€â”€ */}
      {/* Bloom behind */}
      <ellipse cx="56" cy="265" rx="38" ry="18" fill="rgba(168,133,73,0.22)" filter="url(#g-strong)" />
      {/* Housing */}
      <path
        d="M 36,254 C 44,246 70,243 85,251 L 85,277 C 70,283 44,280 36,273 Z"
        fill="rgba(168,133,73,0.08)"
        stroke="rgba(168,133,73,0.5)"
        strokeWidth="1.2"
      />
      {/* DRL */}
      <path d="M 40,258 L 81,256" stroke="#A88549" strokeWidth="3" opacity="0.9" strokeLinecap="round" filter="url(#g-gold)" />
      <path d="M 40,266 L 78,264" stroke="#A88549" strokeWidth="1.6" opacity="0.5" strokeLinecap="round" />
      {/* Light beam */}
      <path d="M 36,265 C 8,255 -10,248 -22,245" stroke="#A88549" strokeWidth="0.7" opacity="0.2" strokeDasharray="5 3" />

      {/* â”€â”€ TAILLIGHT â€” warm amber/gold â”€â”€ */}
      <ellipse cx="716" cy="252" rx="26" ry="20" fill="rgba(168,133,73,0.18)" filter="url(#g-strong)" />
      <rect x="707" y="225" width="15" height="38" rx="3"
        fill="rgba(168,133,73,0.12)"
        stroke="rgba(168,133,73,0.55)"
        strokeWidth="1.2"
        filter="url(#g-glow)"
      />
      <line x1="711" y1="231" x2="711" y2="256" stroke="#A88549" strokeWidth="3" opacity="0.85" strokeLinecap="round" filter="url(#g-glow)" />

      {/* â”€â”€ FRONT WHEEL â”€â”€ */}
      {/* Tire */}
      <circle cx="186" cy="333" r="52" fill="#0e1510" stroke="rgba(247,244,239,0.1)" strokeWidth="1.5" />
      {/* Tire highlight */}
      <path d="M 148,298 C 158,290 174,286 186,287 C 198,288 212,292 218,300"
        stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Rim rings */}
      <circle cx="186" cy="333" r="38" fill="none" stroke="rgba(168,133,73,0.45)" strokeWidth="1.5" />
      <circle cx="186" cy="333" r="18" fill="none" stroke="#A88549" strokeWidth="1.8" opacity="0.7" filter="url(#g-gold)" />
      {/* Center */}
      <circle cx="186" cy="333" r="6" fill="rgba(168,133,73,0.8)" filter="url(#g-glow)" />
      <WheelSpokes cx={186} cy={333} r1={18} r2={38} />

      {/* â”€â”€ REAR WHEEL â”€â”€ */}
      <circle cx="578" cy="333" r="52" fill="#0e1510" stroke="rgba(247,244,239,0.1)" strokeWidth="1.5" />
      <path d="M 540,298 C 550,290 566,286 578,287 C 590,288 604,292 610,300"
        stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="578" cy="333" r="38" fill="none" stroke="rgba(168,133,73,0.45)" strokeWidth="1.5" />
      <circle cx="578" cy="333" r="18" fill="none" stroke="#A88549" strokeWidth="1.8" opacity="0.7" filter="url(#g-gold)" />
      <circle cx="578" cy="333" r="6" fill="rgba(168,133,73,0.8)" filter="url(#g-glow)" />
      <WheelSpokes cx={578} cy={333} r1={18} r2={38} />
    </svg>
  );
}

const stats = [
  { value: "100%", label: "Electric", color: "#A88549" },
  { value: "24/7", label: "Available", color: "#f7f4ef" },
  { value: "0 kg", label: "COâ‚‚ Direct", color: "#A88549" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#08100d" }}
    >
      {/* â”€â”€ Right-side warm glow (brand neutral, replaces blue) â”€â”€ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 78% 55%, rgba(247,244,239,0.09) 0%, rgba(168,133,73,0.07) 28%, rgba(45,122,96,0.04) 52%, transparent 72%)",
        }}
      />

      {/* Subtle top-left ambient */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[40vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 5% 5%, rgba(168,133,73,0.06) 0%, transparent 55%)",
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,244,239,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,239,0.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* â”€â”€ Badge â€” centered, 20px below navbar â”€â”€ */}
      <div className="absolute top-[88px] inset-x-0 flex justify-center z-20 pointer-events-none">
        <div
          className="inline-flex items-center gap-2.5 pointer-events-auto"
          style={{
            background: "rgba(168,133,73,0.1)",
            border: "1px solid rgba(168,133,73,0.22)",
            borderRadius: "999px",
            padding: "7px 18px",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#A88549] flex-shrink-0"
            style={{ boxShadow: "0 0 8px #A88549" }}
          />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#f7f4ef]/60">
            Premium EV Transportation Â· Kigali
          </span>
        </div>
      </div>

      {/* â”€â”€ Content â”€â”€ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-44 pb-12 lg:pt-52 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* â”€â”€ LEFT: Text â”€â”€ */}
          <div className="lg:pr-8">

            {/* Headline */}
            <h1
              className="font-bold leading-[1.04] mb-5 tracking-tight"
              style={{
                fontSize: "clamp(2.8rem, 5.8vw, 5.8rem)",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              <span className="text-[#f7f4ef] block">Travel in</span>
              <span className="text-[#f7f4ef] block">Luxury.</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #A88549 0%, #d4a855 52%, #A88549 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Leave No Trace.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#f7f4ef]/45 text-[1.06rem] leading-relaxed mb-10 max-w-[420px]">
              Rwanda&apos;s first fully electric VIP fleet. Premium comfort, zero direct emissions,
              available every day â€” for corporate clients, individuals, and tourists.
            </p>

            {/* CTAs â€” side by side under the words */}
            <div className="flex items-center gap-3 mb-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-semibold px-8 py-[15px] rounded-full text-white text-[0.95rem] transition-all hover:scale-[1.04] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #A88549 0%, #c9a55a 100%)",
                  boxShadow: "0 0 42px rgba(168,133,73,0.5), 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Your Ride
              </a>

              <a
                href="#fleet"
                className="inline-flex items-center gap-2.5 font-semibold px-8 py-[14px] rounded-full text-[0.95rem] transition-all hover:scale-[1.04] active:scale-95"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(247,244,239,0.18)",
                  color: "rgba(247,244,239,0.75)",
                }}
              >
                Explore Fleet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>

          {/* â”€â”€ RIGHT: Car â”€â”€ */}
          <div className="relative flex items-center justify-center lg:justify-end float-slow">
            {/* Warm glow bloom directly behind the car */}
            <div
              className="absolute inset-[-10%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 75% 65% at 52% 52%, rgba(247,244,239,0.08) 0%, rgba(168,133,73,0.06) 35%, transparent 65%)",
              }}
            />
            <div className="relative w-full max-w-2xl">
              <EVCarSVG />
            </div>
          </div>

        </div>

        {/* â”€â”€ Stats â€” full-width row, below car, centered â”€â”€ */}
        <div className="w-full flex items-center justify-center gap-14 sm:gap-24 mt-10 lg:mt-14">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                  fontFamily: "var(--font-playfair), serif",
                  color: s.color,
                }}
              >
                {s.value}
              </div>
              <div className="text-[12px] text-[#f7f4ef]/30 tracking-[0.2em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(4,8,6,0.5))" }}
      />
    </section>
  );
}

