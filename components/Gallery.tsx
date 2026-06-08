"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

/* ── Client gallery photos — files live in /public/gallery/ ── */
const photos = [
  {
    src: "/gallery/1.jpg",
    alt: "Elotrica client photo 1",
    caption: "Airport Transfer · Kigali",
    span: "row-span-2",
  },
  {
    src: "/gallery/2.webp",
    alt: "Elotrica client photo 2",
    caption: "Executive SUV · City Tour",
    span: "",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Elotrica client photo 3",
    caption: "Corporate Transfer",
    span: "",
  },
  {
    src: "/gallery/4.png",
    alt: "Elotrica client photo 4",
    caption: "Evening Ride · Kigali",
    span: "row-span-2",
  },
  {
    src: "/gallery/5.png",
    alt: "Elotrica client photo 5",
    caption: "Premium Interior",
    span: "",
  },
  {
    src: "/gallery/6.png",
    alt: "Elotrica client photo 6",
    caption: "Tourist Trip · Musanze",
    span: "",
  },
];

/* ── Review submission form ── */
function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover]   = useState(0);
  const [sent, setSent]     = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      body: data,
    }).catch(() => {});

    setSent(true);
    form.reset();
    setRating(0);
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="text-lg font-bold text-[#122820] mb-1">Thank you!</h3>
        <p className="text-sm text-[#122820]/55">Your review has been received. We&apos;ll feature it soon.</p>
      </div>
    );
  }

  return (
    <form
      name="elotrica-reviews"
      method="POST"
      encType="multipart/form-data"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Netlify hidden field */}
      <input type="hidden" name="form-name" value="elotrica-reviews" />

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-[#122820]/60 uppercase tracking-wider mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Jane Doe"
          className="w-full px-4 py-3 rounded-xl border border-[#122820]/10 bg-white text-[#122820] text-sm focus:outline-none focus:border-[#A88549] transition-colors"
        />
      </div>

      {/* Star rating */}
      <div>
        <label className="block text-xs font-semibold text-[#122820]/60 uppercase tracking-wider mb-2">
          Rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="text-2xl transition-transform hover:scale-110"
            >
              {star <= (hover || rating) ? "★" : "☆"}
            </button>
          ))}
        </div>
        <input type="hidden" name="rating" value={rating} />
      </div>

      {/* Review */}
      <div>
        <label className="block text-xs font-semibold text-[#122820]/60 uppercase tracking-wider mb-1.5">
          Your Review
        </label>
        <textarea
          name="review"
          required
          rows={4}
          placeholder="Tell us about your experience with Elotrica..."
          className="w-full px-4 py-3 rounded-xl border border-[#122820]/10 bg-white text-[#122820] text-sm focus:outline-none focus:border-[#A88549] transition-colors resize-none"
        />
      </div>

      {/* Photo upload */}
      <div>
        <label className="block text-xs font-semibold text-[#122820]/60 uppercase tracking-wider mb-1.5">
          Upload a Photo <span className="font-normal text-[#122820]/35 normal-case">(optional)</span>
        </label>
        <label
          className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-[#A88549]/30 hover:border-[#A88549]/60 cursor-pointer transition-colors bg-[#f7f4ef]/60"
        >
          <svg className="w-5 h-5 text-[#A88549] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-[#122820]/50">Choose photo or drag here</span>
          <input type="file" name="photo" accept="image/*" className="hidden" />
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #A88549, #c9a55a)",
          boxShadow: "0 4px 20px rgba(168,133,73,0.35)",
        }}
      >
        Submit Review
      </button>
    </form>
  );
}

/* ── Lightbox ── */
function Lightbox({ photo, onClose }: { photo: typeof photos[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,10,8,0.92)" }}
      onClick={onClose}
    >
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} className="w-full rounded-2xl object-cover max-h-[80vh]" />
        <p className="text-center text-[#f7f4ef]/60 text-sm mt-3">{photo.caption}</p>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#A88549] text-white flex items-center justify-center text-lg font-bold hover:bg-[#c9a55a] transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-[#f7f4ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <FadeIn direction="none">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#A88549] uppercase block mb-4">Client Gallery</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold text-[#122820] leading-[1.08] mb-4">
              Moments with{" "}
              <span style={{
                background: "linear-gradient(90deg, #A88549, #c9a55a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Elotrica.
              </span>
            </h2>
            <p className="text-[#122820]/50 max-w-sm mx-auto text-sm leading-relaxed">
              Real clients, real journeys. Share your own Elotrica experience below.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Photo grid */}
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                style={{ gridAutoRows: "160px" }}
              >
                {photos.map((p, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${p.span}`}
                    onClick={() => setActive(p)}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#122820]/0 group-hover:bg-[#122820]/35 transition-colors duration-300 rounded-2xl" />
                    <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[11px] font-semibold text-white/90 bg-[#122820]/60 px-2 py-1 rounded-full backdrop-blur-sm">
                        {p.caption}
                      </span>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Review form */}
          <div>
            <FadeIn direction="right" delay={120}>
              <div
                className="rounded-2xl p-7 sticky top-24"
                style={{
                  background: "white",
                  boxShadow: "0 0 0 1px rgba(18,40,32,0.07), 0 8px 32px rgba(18,40,32,0.07)",
                }}
              >
                <h3 className="text-lg font-bold text-[#122820] mb-1">Share Your Experience</h3>
                <p className="text-xs text-[#122820]/45 mb-6">
                  Rode with us? Leave a review and upload your photo — we&apos;d love to feature you.
                </p>
                <ReviewForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active && <Lightbox photo={active} onClose={() => setActive(null)} />}
    </section>
  );
}
