import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Unsplash photos: African/Nigerian tech professionals, workspaces, and collaborative settings
const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=85',
    caption: 'Building the future — Abuja',
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85',
    caption: 'Engineering excellence',
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=85',
    caption: 'Collaborative by design',
  },
  {
    url: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1600&q=85',
    caption: 'Remote-first, world-class',
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&q=85',
    caption: 'Leadership that delivers',
  },
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
    <section className="relative min-h-screen max-h-[900px] flex flex-col justify-end overflow-hidden">

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

        {/* Dark gradient overlay — heavier at bottom so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/85" />

        {/* Subtle grain texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left meta column */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-3 pt-2">
              <span className="mono-font text-[10px] tracking-[0.2em] text-white/50 uppercase">
                [ Est. ]
              </span>
              <span className="mono-font text-xs text-white/70">Abuja, NG</span>
              <span className="mono-font text-xs text-white/50">N 9.06° E 7.49°</span>
            </div>

            {/* Main content */}
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3 mb-8 animate-reveal">
                <div className="h-px w-12 bg-white/60"></div>
                <span className="mono-font text-[11px] tracking-[0.2em] text-white/70 uppercase">
                  A Tech Consultancy from Africa, for the World
                </span>
              </div>

              <h1
                className="display-font font-light text-[clamp(1.75rem,4.5vw,4rem)] leading-[1.1] tracking-[0.01em] mb-10 text-white animate-reveal"
                style={{ animationDelay: '0.1s' }}
              >
                We build software<br />
                <span className="italic font-normal text-navy-pale">that businesses</span><br />
                actually depend on.
              </h1>

              <div
                className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl animate-reveal"
                style={{ animationDelay: '0.3s' }}
              >
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                  World-class digital products, secure infrastructure, and a remote-first team of
                  engineers, designers, and project managers headquartered in Abuja.
                </p>
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                  We mentor Africa's next generation of tech talent while shipping for clients
                  across e-commerce, aviation, logistics, and the public sector.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-3 mt-12 animate-reveal"
                style={{ animationDelay: '0.5s' }}
              >
                <a
                  href="#contact"
                  className="group bg-white text-navy px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-pale transition-all"
                >
                  GET A QUOTE
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#work"
                  className="group border border-white/50 text-white px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-white hover:text-navy transition-all"
                >
                  VIEW OUR WORK
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#mvp"
                  className="group px-7 py-4 text-sm font-medium tracking-wide text-white flex items-center gap-3 hover:gap-5 transition-all underline underline-offset-4 decoration-white/40"
                >
                  Build Your MVP →
                </a>
              </div>
            </div>
          </div>

          {/* ── SLIDESHOW CONTROLS (bottom bar) ── */}
          <div className="mt-16 flex items-center justify-between">
            {/* Dot indicators + counter */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-px transition-all duration-400 ${i === current
                      ? 'w-10 bg-white'
                      : 'w-3 bg-white/30 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>
              <span className="mono-font text-[10px] text-white/50 tracking-wider">
                {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Caption + prev/next */}
            <div className="flex items-center gap-4">
              <span className="mono-font text-[10px] tracking-[0.15em] uppercase text-white/50 hidden sm:inline">
                {SLIDES[current].caption}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => advance(-1)}
                  aria-label="Previous slide"
                  className="w-9 h-9 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => advance(1)}
                  aria-label="Next slide"
                  className="w-9 h-9 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}