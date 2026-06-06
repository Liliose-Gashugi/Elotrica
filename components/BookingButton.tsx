"use client";
import { useState } from "react";

// ⚠️ Get a FREE access key at https://web3forms.com (enter info@elotrica.com),
//     then paste it here. Emails will be delivered to that address.
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const waLink = (service?: string) => {
  const svc = service ? encodeURIComponent(service) : "";
  return `https://wa.me/250788458897?text=Hello%20Elotrica%2C%20I%20would%20like%20to%20book%20a%20ride.%20Here%20are%20my%20details%3A%0AService%3A%20${svc}%0ADate%20%26%20Time%3A%20%0APickup%3A%20%0ADropoff%3A%20`;
};

type View = "choice" | "form" | "sent" | "error";

function BookingModal({ onClose, service }: { onClose: () => void; service?: string }) {
  const [view, setView] = useState<View>("choice");
  const [sending, setSending] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New Booking Request — Elotrica");
    data.append("from_name", "Elotrica Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setView(json.success ? "sent" : "error");
    } catch {
      setView("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(5,10,8,0.88)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl p-7 w-full max-w-sm shadow-2xl max-h-[92vh] overflow-y-auto"
        style={{ animation: "modal-in 0.22s cubic-bezier(.22,1,.36,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#122820]/40 hover:text-[#122820] hover:bg-[#122820]/10 transition-colors text-xl z-10"
        >
          ×
        </button>

        {/* ── CHOICE VIEW ── */}
        {view === "choice" && (
          <>
            <div className="text-center mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #A88549, #c9a55a)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#122820]">How would you like to book?</h3>
              <p className="text-sm text-[#122820]/45 mt-1">Choose your preferred method</p>
            </div>

            {/* WhatsApp */}
            <a
              href={waLink(service)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center gap-4 p-4 rounded-2xl border-2 border-[#2d7a60]/20 hover:border-[#2d7a60] hover:bg-[#2d7a60]/5 transition-all mb-3"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#2d7a60" }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#122820] text-sm">Book via WhatsApp</div>
                <div className="text-xs text-[#122820]/45 mt-0.5">Quick reply in minutes</div>
              </div>
              <svg className="w-4 h-4 text-[#122820]/25 group-hover:text-[#2d7a60] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email → opens form */}
            <button
              onClick={() => setView("form")}
              className="group w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-[#A88549]/20 hover:border-[#A88549] hover:bg-[#A88549]/5 transition-all text-left"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#A88549" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#122820] text-sm">Book via Email</div>
                <div className="text-xs text-[#122820]/45 mt-0.5">Fill a quick form — we reply by email</div>
              </div>
              <svg className="w-4 h-4 text-[#122820]/25 group-hover:text-[#A88549] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* ── EMAIL FORM VIEW ── */}
        {view === "form" && (
          <>
            <button
              onClick={() => setView("choice")}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#122820]/45 hover:text-[#A88549] transition-colors mb-4"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <h3 className="text-lg font-bold text-[#122820] mb-1">Booking details</h3>
            <p className="text-xs text-[#122820]/45 mb-5">We&apos;ll confirm your ride by email.</p>

            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input name="Name" required placeholder="Full name *"
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
              <input name="Email" type="email" required placeholder="Your email *"
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
              <input name="Phone" placeholder="Phone number"
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
              <input name="Date & Time" required placeholder="Date & time *"
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
              <div className="flex gap-3">
                <input name="Pickup" required placeholder="Pickup *"
                  className="w-1/2 px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
                <input name="Dropoff" required placeholder="Dropoff *"
                  className="w-1/2 px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors" />
              </div>
              <select name="Service" defaultValue={service ?? ""}
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors">
                <option value="" disabled>Service type</option>
                <option>Corporate VIP</option>
                <option>Individual & Leisure</option>
                <option>Visitor & Tourist</option>
                <option>Airport Transfer</option>
              </select>
              <textarea name="Notes" rows={2} placeholder="Anything else? (optional)"
                className="w-full px-4 py-2.5 rounded-xl border border-[#122820]/12 text-sm text-[#122820] focus:outline-none focus:border-[#A88549] transition-colors resize-none" />

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #A88549, #c9a55a)" }}
              >
                {sending ? "Sending…" : "Send Booking Request"}
              </button>
            </form>
          </>
        )}

        {/* ── SENT VIEW ── */}
        {view === "sent" && (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#2d7a60]/12 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#2d7a60]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#122820] mb-1">Request sent!</h3>
            <p className="text-sm text-[#122820]/50">We&apos;ve received your booking and will reply by email shortly.</p>
            <button onClick={onClose} className="mt-5 px-6 py-2.5 rounded-full font-semibold text-white text-sm" style={{ background: "linear-gradient(135deg, #A88549, #c9a55a)" }}>
              Done
            </button>
          </div>
        )}

        {/* ── ERROR VIEW ── */}
        {view === "error" && (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#122820] mb-1">Couldn&apos;t send</h3>
            <p className="text-sm text-[#122820]/50 mb-5">Please try WhatsApp instead, or email us directly at info@elotrica.com.</p>
            <button onClick={() => setView("choice")} className="px-6 py-2.5 rounded-full font-semibold text-white text-sm" style={{ background: "linear-gradient(135deg, #A88549, #c9a55a)" }}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Drop-in replacement for any booking button ── */
export default function BookingButton({
  children,
  className = "",
  style,
  service,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  service?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} style={style} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && <BookingModal onClose={() => setOpen(false)} service={service} />}
    </>
  );
}
