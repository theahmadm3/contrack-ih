import { Instagram, Twitter } from 'lucide-react';
import { socials } from '../data/socials.js';

// TikTok icon — lucide-react doesn't have it, so we use a custom SVG
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

const ICONS = {
  Instagram: Instagram,
  X: Twitter,
  TikTok: TikTokIcon,
};

/**
 * @param {'compact' | 'labeled' | 'large'} variant
 * @param {'light' | 'dark'} tone - text/border color for the current background
 */
export default function SocialLinks({ variant = 'compact', tone = 'dark' }) {
  const isLight = tone === 'light';
  const borderClr = isLight ? 'border-white/20 hover:border-white/60' : 'border-navy/20 hover:border-navy';
  const textClr = isLight ? 'text-white' : 'text-navy';
  const mutedClr = isLight ? 'text-white/60' : 'text-navy-mid';

  if (variant === 'compact') {
    return (
      <div className="flex gap-2">
        {socials.map((s) => {
          const Icon = ICONS[s.name];
          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className={`w-10 h-10 border ${borderClr} ${textClr} flex items-center justify-center transition-colors`}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className="grid sm:grid-cols-3 gap-px bg-current/20 border border-current/20">
        {socials.map((s) => {
          const Icon = ICONS[s.name];
          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 lg:p-8 flex items-center justify-between bg-navy ${textClr} hover:bg-navy-mid transition-colors`}
            >
              <div>
                <div className={`mono-font text-[10px] tracking-[0.2em] uppercase ${mutedClr} mb-2`}>
                  Follow on
                </div>
                <div className="display-font text-2xl">{s.name}</div>
                <div className="mono-font text-xs mt-1 opacity-70">{s.handle}</div>
              </div>
              <Icon size={28} />
            </a>
          );
        })}
      </div>
    );
  }

  // labeled
  return (
    <div className="flex flex-col gap-2">
      {socials.map((s) => {
        const Icon = ICONS[s.name];
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 ${textClr} hover:opacity-70 transition-opacity`}
          >
            <Icon size={14} />
            <span className="text-sm">{s.name}</span>
            <span className={`mono-font text-[10px] ${mutedClr}`}>{s.handle}</span>
          </a>
        );
      })}
    </div>
  );
}
