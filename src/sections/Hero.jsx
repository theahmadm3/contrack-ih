import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';

const SLIDES = [
  { url: hero1, caption: 'Building the future — Abuja' },
  { url: hero2, caption: 'Engineering excellence' },
  { url: hero3, caption: 'Collaborative by design' },
];

export default function Hero({ scrollY }) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 5500);
    return () => clearInterval(timer);
  }, [current]);

  const advance = (dir) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
      setTransitioning(false);
    }, 500);
  };

  const goTo = (i) => {
    if (transitioning || i === current) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(i); setTransitioning(false); }, 500);
  };

  return (
    /*
      h-[100dvh] — fills the true visible viewport on every device/browser,
      including mobile where the address bar shrinks the space.
      max-h-[900px] — caps growth on very tall displays (>900px tall).
      No min-h-screen so content never forces scrolling at 1024px.
    */
    <section className="relative h-[100dvh] max-h-[900px] flex flex-col justify-end overflow-hidden">

      {/* ── BACKGROUND SLIDESHOW ── */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.url}
            alt={slide.caption}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? (transitioning ? 0 : 1) : 0,
              transition: 'opacity 0.8s ease',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/85" />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── FOREGROUND CONTENT ──
          pt scales: 20 (mobile) → 24 (md) → 28 (lg) — enough to clear the navbar
          pb scales: 8 (mobile) → 10 (md) → 12 (lg) — keeps bottom controls visible
      */}
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">

            {/* Left meta column — hidden below lg */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-2 pt-1">
              <span className="mono-font text-[10px] tracking-[0.2em] text-white/50 uppercase">[ Est. ]</span>
              <span className="mono-font text-xs text-white/70">Abuja, NG</span>
              <span className="mono-font text-xs text-white/50">N 9.06° E 7.49°</span>
            </div>

            {/* Main content */}
            <div className="lg:col-span-10">

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5 lg:mb-6 animate-reveal">
                <div className="h-px w-10 bg-white/60"></div>
                <span className="mono-font text-[10px] lg:text-[11px] tracking-[0.2em] text-white/70 uppercase">
                  A Tech Consultancy from Africa, for the World
                </span>
              </div>

              {/* Headline
                  clamp: 1.6rem at smallest → scales with viewport → caps at 3.5rem
                  This keeps all 3 lines visible at 1024×768 without scrolling
              */}
              <h1
                className="display-font font-light text-[clamp(1.6rem,3.8vw,3.5rem)] leading-[1.12] tracking-[0.01em] mb-5 lg:mb-6 text-white animate-reveal"
                style={{ animationDelay: '0.1s' }}
              >
                We build software<br />
                <span className="italic font-normal text-navy-pale">that businesses</span><br />
                actually depend on.
              </h1>

              {/* Body copy
                  Single column on screens where space is tight (< md),
                  two columns from md up. Text size capped at base on lg
                  so it doesn't push content below the fold.
              */}
              <div
                className="grid md:grid-cols-2 gap-4 lg:gap-10 max-w-4xl animate-reveal"
                style={{ animationDelay: '0.3s' }}
              >
                <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                  World-class digital products, secure infrastructure, and a remote-first team of
                  engineers, designers, and project managers headquartered in Abuja.
                </p>
                <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                  We mentor Africa's next generation of tech talent while shipping for clients
                  across e-commerce, aviation, logistics, and the public sector.
                </p>
              </div>

              {/* CTAs — slightly smaller padding at lg to save vertical space */}
              <div
                className="flex flex-wrap items-center gap-2 lg:gap-3 mt-6 lg:mt-8 animate-reveal"
                style={{ animationDelay: '0.5s' }}
              >
                <a
                  href="#contact"
                  className="group bg-white text-navy px-5 lg:px-7 py-3 lg:py-3.5 text-xs lg:text-sm font-medium tracking-wide flex items-center gap-2 hover:bg-navy-pale transition-all"
                >
                  GET A QUOTE
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#work"
                  className="group border border-white/50 text-white px-5 lg:px-7 py-3 lg:py-3.5 text-xs lg:text-sm font-medium tracking-wide flex items-center gap-2 hover:bg-white hover:text-navy transition-all"
                >
                  VIEW OUR WORK
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#mvp"
                  className="group px-5 lg:px-7 py-3 lg:py-3.5 text-xs lg:text-sm font-medium tracking-wide text-white flex items-center gap-2 hover:gap-4 transition-all underline underline-offset-4 decoration-white/40"
                >
                  Build Your MVP →
                </a>
              </div>
            </div>
          </div>

          {/* ── SLIDESHOW CONTROLS ── */}
          <div className="mt-6 lg:mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2 items-center">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-px transition-all duration-400 ${i === current ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>
              <span className="mono-font text-[10px] text-white/50 tracking-wider">
                {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="mono-font text-[10px] tracking-[0.15em] uppercase text-white/50 hidden sm:inline">
                {SLIDES[current].caption}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => advance(-1)}
                  aria-label="Previous slide"
                  className="w-8 h-8 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => advance(1)}
                  aria-label="Next slide"
                  className="w-8 h-8 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}