import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { services } from '../data/services.js';

export default function Services() {
  const [openService, setOpenService] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ 03 / Services ]
            </span>
          </div>
          <div className="lg:col-span-7">
            <h2 className="display-font font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              Eight ways <span className="italic text-navy-mid">we get involved</span>.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:pt-6">
            <p className="text-sm text-navy/70 leading-relaxed">
              From the first whiteboard sketch to the post-launch retainer — we cover the full arc
              of what it takes to ship and keep shipping.
            </p>
          </div>
        </div>

        <div className="border-t border-navy/15">
          {services.map((s, i) => (
            <div key={i} className="border-b border-navy/15 group">
              <button
                onClick={() => setOpenService(openService === i ? -1 : i)}
                className="w-full py-6 lg:py-8 flex items-center justify-between text-left transition-all hover:px-2"
              >
                <div className="flex items-baseline gap-6 lg:gap-10">
                  <span className="mono-font text-xs text-navy-mid">{s.num}</span>
                  <h3 className="display-font text-2xl lg:text-4xl font-light tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <span className="shrink-0 ml-4 w-10 h-10 border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                  {openService === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {openService === i && (
                <div className="pb-8 lg:pb-10 grid lg:grid-cols-12 gap-6 animate-reveal">
                  <div className="lg:col-start-3 lg:col-span-7">
                    <p className="text-base lg:text-lg leading-relaxed text-navy/80 mb-6">
                      {s.desc}
                    </p>
                    <a
                      href="#contact"
                      className="group/cta inline-flex items-center gap-2 text-sm font-medium border-b border-navy pb-1"
                    >
                      {s.cta}{' '}
                      <ArrowUpRight
                        size={14}
                        className="group-hover/cta:rotate-45 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
