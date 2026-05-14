import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../data/projects.js';

// Logo imports — transparent PNGs from src/assets/images
import jetOpsLogo from '../assets/images/jet-ops-logo.png';
import dsaLogo from '../assets/images/domestic-staff-app-logo.png';
import zariLogo from '../assets/images/zari-logo.png';
import flybirdLogo from '../assets/images/flybird-logo.png';

// Map slug → logo import
const LOGOS = {
  'jetops': jetOpsLogo,
  'domestic-staff-app': dsaLogo,
  'zari': zariLogo,
  'flybird': flybirdLogo,
};

// Max-width per logo so wide/flat logos render at a readable size
// without stretching to fill the whole card
const LOGO_WIDTHS = {
  'jetops': 'max-w-[160px]',
  'domestic-staff-app': 'max-w-[140px]',
  'zari': 'max-w-[140px]',
  'flybird': 'max-w-[170px]',
};

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-pale uppercase">
              [ 02 / Work ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h2 className="display-font font-light text-4xl lg:text-6xl leading-[0.95] tracking-tight max-w-4xl">
              Selected projects,{' '}
              <span className="italic text-navy-pale">honestly built</span>.
            </h2>
          </div>
        </div>

        {/* Logo card grid — 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {featuredProjects.map((p, i) => {
            const logo = LOGOS[p.slug];
            const logoWidth = LOGO_WIDTHS[p.slug] || 'max-w-[140px]';

            return (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group relative bg-navy hover:bg-navy-mid transition-colors duration-400 flex flex-col"
              >
                {/* Logo area */}
                <div className="flex-1 flex items-center justify-center px-8 py-10 lg:py-14 min-h-[160px] lg:min-h-[200px]">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${p.name} logo`}
                      className={`w-full ${logoWidth} h-auto object-contain
                        brightness-0 invert opacity-60
                        group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  ) : (
                    <span className="display-font text-3xl lg:text-4xl font-light text-white/50 group-hover:text-white transition-colors">
                      {p.name}
                    </span>
                  )}
                </div>

                {/* Card footer */}
                <div className="border-t border-white/10 px-6 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium text-white/90 group-hover:text-white mb-1 transition-colors">
                        {p.name}
                      </div>
                      <div className="mono-font text-[9px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white/60 transition-colors">
                        {p.sector} · {p.year}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 mt-0.5 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="mono-font text-[8px] tracking-wider uppercase border border-white/15 group-hover:border-white/30 px-1.5 py-0.5 text-white/40 group-hover:text-white/70 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Index number — top-left corner */}
                <div className="absolute top-4 left-5 mono-font text-[10px] text-white/20 group-hover:text-white/40 transition-colors">
                  0{i + 1}
                </div>
              </Link>
            );
          })}
        </div>

        {/* All projects CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            to="/projects"
            className="group flex items-center gap-3 mono-font text-xs tracking-[0.2em] uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-navy transition-colors"
          >
            All Case Studies
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}