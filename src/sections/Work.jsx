import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../data/projects.js';

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-pale uppercase">
              [ 02 / Work ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h2 className="display-font font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl">
              Selected projects, <span className="italic text-navy-pale">honestly built</span>.
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {featuredProjects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block border-t border-white/15 last:border-b py-8 lg:py-10 transition-all hover:pl-4 duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 mono-font text-xs text-navy-pale/70">
                  0{i + 1}
                </div>
                <div className="lg:col-span-3">
                  <h3 className="display-font text-3xl lg:text-4xl font-normal tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <div className="lg:col-span-2 mono-font text-xs text-navy-pale tracking-wider uppercase pt-3">
                  {p.sector} · {p.year}
                </div>
                <div className="lg:col-span-4 text-navy-pale/90 text-sm lg:text-base leading-relaxed">
                  {p.summary}
                </div>
                <div className="lg:col-span-2 flex flex-wrap gap-2 lg:justify-end">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="mono-font text-[10px] tracking-wider uppercase border border-white/20 px-2.5 py-1 text-navy-pale"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <Link
            to="/projects"
            className="group flex items-center gap-3 mono-font text-xs tracking-[0.2em] uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-navy transition-colors"
          >
            All Case Studies{' '}
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}