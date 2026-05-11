import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Scroll to top whenever project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Redirect to /projects if slug doesn't exist
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Compute "next project" for the bottom nav
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-32 lg:pt-40 pb-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Breadcrumb / back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mono-font text-[11px] tracking-[0.2em] uppercase text-navy-mid hover:text-navy transition-colors mb-12"
        >
          <ArrowLeft size={14} /> All Projects
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ {project.sector} ]
            </span>
          </div>
          <div className="lg:col-span-10">
            <h1 className="display-font font-light text-5xl lg:text-8xl leading-[0.92] tracking-tight mb-6">
              {project.name}
            </h1>
            <p className="text-lg lg:text-2xl text-navy/80 leading-relaxed max-w-4xl display-font font-light italic">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="aspect-[16/9] bg-navy-pale mb-16 lg:mb-24 flex items-center justify-center relative overflow-hidden">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <span className="display-font text-[14rem] lg:text-[20rem] font-light text-navy/15 leading-none">
                {project.name.charAt(0)}
              </span>
              <div className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-mid mt-4">
                COVER_IMAGE_PENDING
              </div>
            </div>
          )}
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-navy/15 mb-16 lg:mb-24">
          {[
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.duration },
            { label: 'Team Size', value: project.teamSize },
          ].map((m, i) => (
            <div
              key={i}
              className="border-b lg:border-b-0 lg:border-r last:border-r-0 border-navy/15 py-6 lg:py-8 lg:px-6"
            >
              <div className="mono-font text-[10px] tracking-[0.2em] uppercase text-navy-mid mb-2">
                {m.label}
              </div>
              <div className="text-base lg:text-lg font-medium">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Challenge → Solution → Impact */}
        <div className="space-y-16 lg:space-y-24 mb-16 lg:mb-24">
          {[
            { num: '01', label: 'Challenge', content: project.challenge },
            { num: '02', label: 'Solution', content: project.solution },
            { num: '03', label: 'Impact', content: project.impact },
          ].map((section) => (
            <div key={section.num} className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <div className="mono-font text-xs text-navy-mid mb-2">{section.num}</div>
                <h2 className="display-font text-3xl lg:text-4xl font-light tracking-tight">
                  {section.label}
                </h2>
              </div>
              <div className="lg:col-span-9 lg:col-start-5">
                <p className="text-base lg:text-xl leading-relaxed text-navy/85 max-w-3xl">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16 lg:mb-24">
            <div className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase mb-8">
              [ 04 / Gallery ]
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-navy-pale overflow-hidden">
                  <img src={img} alt={`${project.name} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-16 lg:mb-24 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="mono-font text-xs text-navy-mid mb-2">/</div>
            <h2 className="display-font text-3xl lg:text-4xl font-light tracking-tight">Stack</h2>
          </div>
          <div className="lg:col-span-9 lg:col-start-5 flex flex-wrap gap-2 items-start">
            {project.tags.map((t) => (
              <span
                key={t}
                className="mono-font text-xs tracking-wider uppercase border border-navy/20 px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="bg-navy text-white p-10 lg:p-16 mb-16 lg:mb-24 relative grain">
            <div className="display-font text-6xl lg:text-9xl absolute top-4 left-6 text-white/10 leading-none">
              "
            </div>
            <div className="relative max-w-4xl">
              <p className="display-font text-2xl lg:text-4xl font-light italic leading-[1.3] mb-6">
                {project.testimonial.quote}
              </p>
              <div className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-pale">
                — {project.testimonial.author}
              </div>
            </div>
          </div>
        )}

        {/* Bottom nav: next project */}
        <div className="border-t border-navy/15 pt-10 grid lg:grid-cols-2 gap-6 items-center">
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block"
          >
            <div className="mono-font text-[11px] tracking-[0.2em] uppercase text-navy-mid mb-2">
              Next Project →
            </div>
            <div className="display-font text-4xl lg:text-5xl font-light tracking-tight group-hover:text-navy-mid transition-colors">
              {nextProject.name}
            </div>
          </Link>
          <div className="flex lg:justify-end gap-3 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-navy px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy hover:text-white transition-all"
              >
                VISIT LIVE SITE
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </a>
            )}
            <Link
              to="/#contact"
              className="group bg-navy text-white px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors"
            >
              START YOUR PROJECT
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
