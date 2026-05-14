import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects.js';

// Tinted placeholder thumbnails — 3 per project
const TINTS = ['bg-navy/8', 'bg-navy-mid/12', 'bg-navy-pale/50'];

function Thumb({ src, alt, index }) {
  return (
    <div className="relative overflow-hidden bg-navy-pale/40 h-14">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full ${TINTS[index % 3]} flex items-center justify-center`}>
          <span className="mono-font text-[8px] tracking-wider text-navy/30 uppercase">
            IMG_0{index + 1}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="pt-28 lg:pt-36 pb-16 lg:pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10 lg:mb-14">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ Portfolio ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h1 className="display-font font-light text-4xl lg:text-6xl leading-[0.95] tracking-tight mb-3">
              Selected work.{' '}
              <span className="italic text-navy-mid">Honestly built.</span>
            </h1>
            <p className="text-sm text-navy/60 max-w-2xl">
              {projects.length} projects across aviation, e-commerce, logistics, and the public sector.
            </p>
          </div>
        </div>

        {/* Project rows — compact horizontal cards */}
        <div className="border border-navy/15 divide-y divide-navy/10">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group grid grid-cols-12 gap-0 bg-white hover:bg-navy-pale/20 transition-colors"
            >
              {/* Index */}
              <div className="col-span-1 hidden lg:flex items-center justify-center border-r border-navy/10 py-4">
                <span className="mono-font text-[10px] text-navy/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Cover + 3 thumbs */}
              <div className="col-span-4 lg:col-span-3 flex flex-col gap-px bg-navy/8 p-px self-stretch">
                {/* Cover */}
                <div className="relative bg-navy-pale overflow-hidden flex-1 min-h-[80px]">
                  {p.coverImage ? (
                    <img src={p.coverImage} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/5 to-navy-pale/70">
                      <span className="display-font text-4xl font-light text-navy/20 select-none">
                        {p.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-1 right-2 mono-font text-[8px] text-navy/30 uppercase">
                    cover
                  </div>
                </div>
                {/* 3 small thumbs */}
                <div className="grid grid-cols-3 gap-px">
                  {[0, 1, 2].map((idx) => (
                    <Thumb
                      key={idx}
                      src={p.gallery?.[idx]}
                      alt={`${p.name} ${idx + 1}`}
                      index={idx}
                    />
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="col-span-8 lg:col-span-7 px-5 py-4 lg:px-7 lg:py-5 flex flex-col justify-center gap-2">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="display-font text-xl lg:text-2xl font-normal tracking-tight leading-tight">
                    {p.name}
                  </h2>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 mt-1 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                  />
                </div>
                <div className="mono-font text-[9px] tracking-wider uppercase text-navy-mid">
                  {p.sector} · {p.year}
                </div>
                <p className="text-xs leading-relaxed text-navy/65 line-clamp-2 hidden sm:block">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="mono-font text-[8px] tracking-wider uppercase border border-navy/15 px-1.5 py-0.5 text-navy/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-navy/15">
          <h2 className="display-font font-light text-2xl lg:text-3xl tracking-tight">
            Have a project?{' '}
            <span className="italic text-navy-mid">Let's build it.</span>
          </h2>
          <Link
            to="/#contact"
            className="group bg-navy text-white px-6 py-3.5 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors shrink-0"
          >
            START A PROJECT
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}