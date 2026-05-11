import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/#about' },
  { label: 'Insights', to: '/#insights' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar({ time }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 lg:py-5 flex items-center justify-between">
        <Logo variant="dark" />

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`hover-line text-sm font-medium tracking-wide ${
                location.pathname === item.to ? 'font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <span className="mono-font text-[10px] text-navy-mid tracking-wider">
            <span className="animate-blink">●</span> {time}
          </span>
          <Link
            to="/#contact"
            className="bg-navy text-white px-5 py-2.5 text-sm font-medium hover:bg-navy-mid transition-colors flex items-center gap-2"
          >
            Get a Quote <ArrowUpRight size={14} />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-navy/10 bg-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                onClick={() => setMenuOpen(false)}
                to={item.to}
                className="text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link
              onClick={() => setMenuOpen(false)}
              to="/#contact"
              className="bg-navy text-white px-5 py-3 text-sm w-fit"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
