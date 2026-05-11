import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <div className="pt-32 lg:pt-40 pb-20 lg:pb-32 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ Portfolio ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h1 className="display-font font-light text-5xl lg:text-8xl leading-[0.92] tracking-tight mb-8">
              Selected work.<br />
              <span className="italic text-navy-mid">Honestly built.</span>
            </h1>
            <p className="text-base lg:text-lg text-navy/80 leading-relaxed max-w-3xl">
              {projects.length} projects across e-commerce, aviation, logistics, and the public
              sector. Each one shipped, in production, and serving real users.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-px bg-navy/15 border border-navy/15">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group bg-white p-8 lg:p-10 hover:bg-navy hover:text-white transition-colors duration-500 flex flex-col"
            >
              {/* Cover */}
              <div className="aspect-[4/3] bg-navy-pale mb-6 flex items-center justify-center group-hover:bg-navy-mid transition-colors relative overflow-hidden">
                {p.coverImage ? (
                  <img
                    src={p.coverImage}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="display-font text-[8rem] font-light text-navy/15 group-hover:text-white/20 leading-none">
                    {p.name.charAt(0)}
                  </span>
                )}
                <div className="absolute top-4 left-4 mono-font text-[10px] tracking-wider text-navy/60 group-hover:text-white/60">
                  PROJECT_0{i + 1}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="display-font text-3xl lg:text-4xl font-normal tracking-tight">
                  {p.name}
                </h2>
                <ArrowUpRight
                  size={20}
                  className="opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                />
              </div>

              <div className="mono-font text-xs tracking-wider uppercase text-navy-mid group-hover:text-navy-pale mb-4">
                {p.sector} · {p.year} · {p.role}
              </div>

              <p className="text-sm lg:text-base leading-relaxed text-navy/80 group-hover:text-white/80 mb-6 flex-1">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="mono-font text-[10px] tracking-wider uppercase border border-current/30 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="display-font font-light text-3xl lg:text-5xl tracking-tight">
              Have a project? <span className="italic text-navy-mid">Let's build it together.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/#contact"
              className="group bg-navy text-white px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors w-fit"
            >
              START A PROJECT
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
