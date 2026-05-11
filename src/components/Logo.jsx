import { Link } from 'react-router-dom';
import logoDark from '../assets/images/contrack-logo-dark-blue.png';
import logoLight from '../assets/images/contrack-logo-white.png';

/**
 * Logo component.
 * @param {'dark' | 'light'} variant - 'dark' for light backgrounds, 'light' for dark backgrounds
 * @param {boolean} showWordmark - whether to show "Contrack / Innovation Hub" text alongside the mark
 */
export default function Logo({ variant = 'dark', showWordmark = true }) {
  const logoSrc = variant === 'light' ? logoLight : logoDark;
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const subColor = variant === 'light' ? 'text-navy-pale' : 'text-navy-mid';

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      {/* Mark — always visible */}
      <img
        src={logoSrc}
        alt="Contrack IH"
        className="h-8 w-8 lg:h-9 lg:w-9 object-contain shrink-0 transition-transform group-hover:scale-105"
      />

      {/* Wordmark — hidden on small screens, visible from lg up */}
      {showWordmark && (
        <div className="hidden lg:flex items-baseline gap-2">
          <span className={`display-font text-2xl font-bold tracking-tight ${textColor}`}>
            Contrack
          </span>
          <span className={`mono-font text-[10px] tracking-[0.2em] uppercase ${subColor}`}>
            Innovation Hub
          </span>
        </div>
      )}
    </Link>
  );
}
