import { leaders } from '../data/leaders.js';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-navy-pale/40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ 04 / About ]
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-font font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-10">
              We don't just build software.
              <br />
              <span className="italic text-navy-mid">We build success stories.</span>
            </h2>
            <p className="text-base lg:text-lg text-navy/80 leading-relaxed max-w-3xl">
              With a focus on business automation, digital transformation, and scalable platforms,
              we help startups, SMEs, and government teams eliminate inefficiencies, optimize
              workflows, and grow with confidence.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-navy/15 border border-navy/15 mt-20">
          {leaders.map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 lg:p-12 group hover:bg-navy hover:text-white transition-colors duration-500"
            >
              <div className="aspect-[4/3] bg-navy-pale mb-8 flex items-center justify-center group-hover:bg-navy-mid transition-colors relative overflow-hidden">
                <span className="display-font text-[10rem] font-light text-navy/20 group-hover:text-white/20 leading-none">
                  {p.name.charAt(0)}
                </span>
                <div className="absolute top-4 left-4 mono-font text-[10px] tracking-wider text-navy/60 group-hover:text-white/60">
                  [ PORTRAIT_0{i + 1}.IMG ]
                </div>
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="display-font text-3xl lg:text-4xl font-normal tracking-tight">
                  {p.name}
                </h3>
              </div>
              <p className="mono-font text-xs tracking-[0.15em] uppercase text-navy-mid group-hover:text-navy-pale mb-6">
                {p.role}
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-navy/80 group-hover:text-white/80 mb-6">
                {p.bio}
              </p>
              <div className="flex gap-2 flex-wrap">
                {p.creds.map((c) => (
                  <span
                    key={c}
                    className="mono-font text-[10px] tracking-wider uppercase border border-current/30 px-2.5 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
