import SectionHeader from '../components/SectionHeader.jsx';
import { stats } from '../data/stats.js';

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <SectionHeader index="01" label="Trust" />
            <h2 className="display-font font-light text-4xl lg:text-5xl leading-tight mt-4 tracking-tight">
              Numbers that
              <br />
              <span className="italic">do the talking</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-navy/15">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border-b lg:border-b-0 lg:border-r last:border-r-0 border-navy/15 py-10 lg:py-12 px-2 lg:px-6 group hover:bg-navy hover:text-white transition-colors duration-500"
            >
              <div className="display-font font-light text-6xl lg:text-7xl leading-none mb-6 ticker-text">
                {stat.num}
              </div>
              <div className="text-sm font-semibold mb-1">{stat.label}</div>
              <div className="mono-font text-[10px] tracking-wider uppercase opacity-60">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
