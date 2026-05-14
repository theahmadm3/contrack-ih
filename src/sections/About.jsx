import { leaders } from '../data/leaders.js';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-navy-pale/40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">

        {/* Header — reduced headline size */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ 04 / About ]
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-font font-light text-3xl lg:text-4xl leading-[1.15] tracking-tight mb-8">
              We don't just build software.
              <br />
              <span className="italic text-navy-mid">We build success stories.</span>
            </h2>
            <p className="text-base text-navy/80 leading-relaxed max-w-3xl">
              With a focus on business automation, digital transformation, and scalable platforms,
              we help startups, SMEs, and government teams eliminate inefficiencies, optimize
              workflows, and grow with confidence.
            </p>
          </div>
        </div>

        {/* Leadership cards — no picture block */}
        <div className="grid lg:grid-cols-2 gap-px bg-navy/15 border border-navy/15 mt-16">
          {leaders.map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 lg:p-10 group hover:bg-navy hover:text-white transition-colors duration-500 flex flex-col"
            >
              {/* Index + role on one line */}
              <div className="flex items-center justify-between mb-6">
                <span className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-mid group-hover:text-navy-pale">
                  {p.role}
                </span>
                <span className="mono-font text-[10px] text-navy/30 group-hover:text-white/30">
                  0{i + 1}
                </span>
              </div>

              {/* Name — large, takes visual weight of the removed photo */}
              <h3 className="display-font text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] mb-6">
                {p.name}
              </h3>

              {/* Divider */}
              <div className="h-px bg-navy/10 group-hover:bg-white/15 mb-6 transition-colors" />

              {/* Bio */}
              <p className="text-sm lg:text-base leading-relaxed text-navy/75 group-hover:text-white/80 mb-8 flex-1">
                {p.bio}
              </p>

              {/* Cred badges */}
              <div className="flex gap-2 flex-wrap">
                {p.creds.map((c) => (
                  <span
                    key={c}
                    className="mono-font text-[10px] tracking-wider uppercase border border-current/25 px-2.5 py-1"
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