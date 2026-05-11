import { clients } from '../data/clients.js';
import { credentials } from '../data/stats.js';

export default function Clients() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-navy/10 relative">
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
              Teams across <span className="italic text-navy-mid">e-commerce, aviation, logistics, and the public sector</span> build with us.
            </h2>
          </div>
        </div>

        {/* Client logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-navy/15 border border-navy/15">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white aspect-[3/2] flex flex-col items-center justify-center p-4 group hover:bg-navy-pale/30 transition-colors"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                />
              ) : (
                <span className="display-font text-xl lg:text-2xl text-navy/40 group-hover:text-navy transition-colors">
                  {client.name}
                </span>
              )}
              <span className="mono-font text-[9px] tracking-[0.15em] uppercase text-navy-mid/60 mt-2">
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
