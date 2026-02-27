'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#techstack', label: 'Tech Stack' },
  { href: '#projects',  label: 'Projects' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = '#home';
      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && window.scrollY >= el.offsetTop - 120) current = href;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5vw', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          RTY<span style={{ WebkitTextFillColor: 'var(--accent2)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontSize: '0.78rem', letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: active === href ? 'var(--accent2)' : 'var(--muted)',
              transition: 'color 0.2s', position: 'relative',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = active === href ? 'var(--accent2)' : 'var(--muted)'}
            >
              {label}
              {active === href && (
                <span style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '1px', background: 'var(--accent2)',
                }} />
              )}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--text)', borderRadius: '2px', transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 5vw 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem', fontFamily: 'Syne, sans-serif', fontWeight: 600,
                color: active === href ? 'var(--accent2)' : 'var(--text)',
              }}>
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
