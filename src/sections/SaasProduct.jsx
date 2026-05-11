import { ArrowUpRight } from 'lucide-react';

const FEATURES = [
  { t: 'Task Logs', d: 'With photo evidence + GPS' },
  { t: 'Live Attendance', d: 'Site check-in tracking' },
  { t: 'Weekly Reports', d: 'Auto-generated for stakeholders' },
];

const TASKS = [
  { l: 'Foundation works', s: 'Complete', p: 100 },
  { l: 'Structural steel', s: 'In progress', p: 72 },
  { l: 'MEP installation', s: 'Started', p: 28 },
  { l: 'Finishes', s: 'Pending', p: 0 },
];

export default function SaasProduct() {
  return (
    <section id="mvp" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
                [ 05 / In-House Product ]
              </span>
              <span className="mono-font text-[10px] bg-navy text-white px-2 py-0.5 tracking-wider">
                LIVE
              </span>
            </div>

            <h2 className="display-font font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-8">
              Construction Tracker.
              <br />
              <span className="italic text-navy-mid">Projects on track, from anywhere.</span>
            </h2>

            <p className="text-base lg:text-lg text-navy/80 leading-relaxed mb-10 max-w-2xl">
              Real-time field-to-office visibility for project managers, site engineers, and real
              estate teams. Built by us, used by everyone who's ever waited too long for a status
              update.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {FEATURES.map((f, i) => (
                <div key={i} className="border-t border-navy/30 pt-4">
                  <div className="mono-font text-[10px] tracking-wider text-navy-mid mb-2">
                    FEATURE_0{i + 1}
                  </div>
                  <div className="font-semibold mb-1">{f.t}</div>
                  <div className="text-sm text-navy/70">{f.d}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="bg-navy text-white px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy-mid transition-colors"
              >
                TRY IT FREE — 14 DAYS <ArrowUpRight size={16} />
              </a>
              <a
                href="#"
                className="border border-navy px-7 py-4 text-sm font-medium tracking-wide flex items-center gap-3 hover:bg-navy hover:text-white transition-colors"
              >
                BOOK A DEMO
              </a>
            </div>
          </div>

          {/* Right: dashboard mock */}
          <div className="lg:col-span-5">
            <div className="bg-navy p-6 lg:p-8 text-white relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                <div className="mono-font text-[10px] tracking-wider text-navy-pale">
                  DASHBOARD / LIVE
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-navy-pale/40"></span>
                  <span className="w-2 h-2 rounded-full bg-navy-pale/40"></span>
                  <span className="w-2 h-2 rounded-full bg-white animate-blink"></span>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mono-font text-[10px] tracking-wider text-navy-pale/70 mb-2">
                    PROJECT
                  </div>
                  <div className="display-font text-2xl">Lekki Tower — Phase 03</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/15">
                  <div>
                    <div className="display-font text-3xl">68%</div>
                    <div className="mono-font text-[9px] tracking-wider text-navy-pale/60 mt-1">
                      COMPLETE
                    </div>
                  </div>
                  <div>
                    <div className="display-font text-3xl">24</div>
                    <div className="mono-font text-[9px] tracking-wider text-navy-pale/60 mt-1">
                      ON-SITE
                    </div>
                  </div>
                  <div>
                    <div className="display-font text-3xl">3</div>
                    <div className="mono-font text-[9px] tracking-wider text-navy-pale/60 mt-1">
                      FLAGS
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {TASKS.map((task, i) => (
                    <div key={i}>
                      <div className="flex justify-between mono-font text-[11px] mb-1.5">
                        <span>{task.l}</span>
                        <span className="text-navy-pale/70">{task.s}</span>
                      </div>
                      <div className="h-px bg-white/15 relative">
                        <div
                          className="absolute left-0 top-0 h-px bg-white"
                          style={{ width: `${task.p}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mono-font text-[10px] text-navy-pale/60 tracking-wider flex justify-between">
                  <span>UPDATED 2 MIN AGO</span>
                  <span className="animate-blink">● LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
