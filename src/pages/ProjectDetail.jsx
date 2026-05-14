import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects.js';

// 6 placeholder slots per project — replace with real imports in projects.js when ready
const PLACEHOLDER_COUNT = 6;
const TINTS = [
  'from-navy/8 to-navy-pale/60',
  'from-navy-mid/10 to-navy/5',
  'from-navy-pale/70 to-navy-pale/30',
  'from-navy/5 to-navy-mid/10',
  'from-navy-pale/40 to-navy/8',
  'from-navy-mid/15 to-navy-pale/50',
];

function GalleryThumb({ src, alt, index, size = 'normal' }) {
  const heightClass = size === 'large' ? 'h-44 lg:h-52' : 'h-28 lg:h-36';
  return (
    <div className={`relative overflow-hidden bg-navy-pale/30 ${heightClass} group/img`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${TINTS[index % TINTS.length]} flex flex-col items-center justify-center gap-1`}>
          <span className="mono-font text-[9px] tracking-[0.2em] uppercase text-navy/30">
            SCREENSHOT
          </span>
          <span className="mono-font text-[8px] text-navy/20">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      )}
      <div className="absolute inset-0 border border-navy/8 pointer-events-none" />
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Build gallery array: real images first, then placeholders to fill up to PLACEHOLDER_COUNT
  const galleryItems = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    src: project.gallery?.[i] ?? null,
    alt: `${project.name} screenshot ${i + 1}`,
    index: i,
  }));

  return (
    <div className="pt-28 lg:pt-36 pb-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mono-font text-[11px] tracking-[0.2em] uppercase text-navy-mid hover:text-navy transition-colors mb-10"
        >
          <ArrowLeft size={13} /> All Projects
        </Link>

        {/* Title block */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10 lg:mb-14">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ {project.sector} ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h1 className="display-font font-light text-4xl lg:text-7xl leading-[0.92] tracking-tight mb-4">
              {project.name}
            </h1>
            <p className="text-base lg:text-xl text-navy/75 leading-relaxed max-w-3xl italic display-font font-light">
              {project.summary}
            </p>
          </div>
        </div>

        {/* ── GALLERY — always shown, placeholder tiles until real images are added ── */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ Gallery ]
            </span>
            <span className="mono-font text-[9px] text-navy/30 tracking-wider uppercase">
              {galleryItems.filter(g => g.src).length} / {PLACEHOLDER_COUNT} uploaded
            </span>
          </div>

          {/*
            Layout: 1 large hero shot on the left,
            stacked 2×2 small grid on the right,
            then a bottom row of 2 wide shots.
            All fixed heights so it fits ~1 viewport on desktop.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-navy/10 border border-navy/10">

            {/* Large hero shot */}
            <div className="lg:col-span-5">
              <GalleryThumb {...galleryItems[0]} size="large" />
            </div>

            {/* 2×2 grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-px">
              <GalleryThumb {...galleryItems[1]} />
              <GalleryThumb {...galleryItems[2]} />
              <GalleryThumb {...galleryItems[3]} />
              <GalleryThumb {...galleryItems[4]} />
            </div>

            {/* Tall side shot */}
            <div className="lg:col-span-3">
              <GalleryThumb {...galleryItems[5]} size="large" />
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-navy/15 mb-10 lg:mb-14">
          {[
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.duration },
            { label: 'Team', value: project.teamSize },
          ].map((m, i) => (
            <div key={i} className="border-b lg:border-b-0 lg:border-r last:border-r-0 border-navy/15 py-5 lg:py-6 lg:px-5">
              <div className="mono-font text-[9px] tracking-[0.2em] uppercase text-navy-mid mb-1.5">
                {m.label}
              </div>
              <div className="text-sm lg:text-base font-medium">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Challenge → Solution → Impact */}
        <div className="space-y-10 lg:space-y-14 mb-10 lg:mb-14">
          {[
            { num: '01', label: 'Challenge', content: project.challenge },
            { num: '02', label: 'Solution', content: project.solution },
            { num: '03', label: 'Impact', content: project.impact },
          ].map((s) => (
            <div key={s.num} className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <div className="mono-font text-[10px] text-navy-mid mb-1">{s.num}</div>
                <h2 className="display-font text-2xl lg:text-3xl font-light tracking-tight">
                  {s.label}
                </h2>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <p className="text-sm lg:text-base leading-relaxed text-navy/80 max-w-2xl">
                  {s.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-10 lg:mb-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="mono-font text-[10px] text-navy-mid mb-1">/</div>
            <h2 className="display-font text-2xl lg:text-3xl font-light tracking-tight">Stack</h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 flex flex-wrap gap-2 items-start pt-1">
            {project.tags.map((t) => (
              <span key={t} className="mono-font text-[10px] tracking-wider uppercase border border-navy/20 px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="bg-navy text-white p-8 lg:p-12 mb-10 lg:mb-14 relative grain">
            <div className="display-font text-6xl lg:text-8xl absolute top-3 left-5 text-white/10 leading-none">"</div>
            <div className="relative max-w-3xl">
              <p className="display-font text-xl lg:text-3xl font-light italic leading-[1.3] mb-5">
                {project.testimonial.quote}
              </p>
              <div className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-pale">
                — {project.testimonial.author}
              </div>
            </div>
          </div>
        )}

        {/* Next project */}
        <div className="border-t border-navy/15 pt-8 grid lg:grid-cols-2 gap-6 items-center">
          <Link to={`/projects/${nextProject.slug}`} className="group block">
            <div className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-mid mb-1.5">
              Next Project →
            </div>
            <div className="display-font text-3xl lg:text-4xl font-light tracking-tight group-hover:text-navy-mid transition-colors">
              {nextProject.name}
            </div>
          </Link>
          <div className="flex lg:justify-end gap-3 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-navy px-6 py-3.5 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy hover:text-white transition-all"
              >
                VISIT LIVE SITE
                <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
              </a>
            )}
            <Link
              to="/#contact"
              className="group bg-navy text-white px-6 py-3.5 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors"
            >
              START YOUR PROJECT
              <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}