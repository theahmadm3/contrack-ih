import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import { useTime } from './hooks/useTime.js';
import { useScrollPosition } from './hooks/useScrollPosition.js';

// Handles hash-link scrolling across page navigation
function ScrollToHashOrTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait one frame for the page to render, then scroll to the hash target
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const time = useTime();
  const scrollY = useScrollPosition();

  return (
    <div className="min-h-screen bg-white text-navy">
      <ScrollToHashOrTop />
      <Navbar time={time} />
      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer time={time} />
    </div>
  );
}
