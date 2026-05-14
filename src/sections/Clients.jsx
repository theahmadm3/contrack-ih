import { clients } from '../data/clients.js';
import { credentials } from '../data/stats.js';

export default function Clients() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-navy/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10 lg:mb-14">
          <div className="lg:col-span-3">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-mid uppercase">
              [ Trusted by ]
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display-font font-light text-2xl lg:text-3xl tracking-tight max-w-3xl">
              Teams across{' '}
              <span className="italic text-navy-mid">
                e-commerce, aviation, logistics, and the public sector
              </span>{' '}
              build with us.
            </h2>
          </div>
        </div>

        {/* Client logo grid
            — 2 cols on mobile, 3 on sm, 5 on lg
            — mix-blend-multiply makes the black logo backgrounds invisible on white
            — each logo is sized by its own maxW so wide/flat logos don't look tiny
              and tall logos don't overflow
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-navy/10 divide-x divide-y divide-navy/10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white cursor-pointer flex flex-col items-center justify-center gap-3 py-8 px-4 lg:py-10 lg:px-6 group hover:bg-navy-pale/20 transition-colors"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`w-full ${client.maxW} h-auto object-contain
                    opacity-60 group-hover:opacity-100 transition-opacity
                    [mix-blend-mode:multiply]`}
                />
              ) : (
                <span className="display-font text-xl lg:text-2xl text-navy/40 group-hover:text-navy transition-colors">
                  {client.name}
                </span>
              )}
              <span className="mono-font text-[9px] tracking-[0.18em] uppercase text-navy-mid/60 group-hover:text-navy-mid transition-colors">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Credential marquee */}
        <div className="mt-12 border-y border-navy/15 bg-navy-pale/20 overflow-hidden py-4 -mx-6 lg:-mx-12">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                {credentials.map((c, idx) => (
                  <span
                    key={idx}
                    className="mono-font text-xs tracking-[0.2em] text-navy mx-8 flex items-center gap-8"
                  >
                    {c} <span className="text-navy-mid">✕</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}