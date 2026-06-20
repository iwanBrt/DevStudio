'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36,
            background: scrolled ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : 'rgba(255,255,255,0.2)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: scrolled ? '0 2px 8px rgba(14, 165, 233, 0.25)' : 'none',
            backdropFilter: scrolled ? 'none' : 'blur(8px)',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.4s ease',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <span className="font-display" style={{ fontWeight: 700, fontSize: 18, color: scrolled ? '#0f172a' : '#ffffff', letterSpacing: '-0.02em', whiteSpace: 'nowrap', transition: 'color 0.4s' }}>
            Dev<span style={{ color: scrolled ? '#0ea5e9' : '#bae6fd', transition: 'color 0.4s' }}>Studio</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ gap: 32, alignItems: 'center' }} className="!hidden md:!flex">
          {['Layanan', 'Harga', 'Portofolio', 'Testimoni', 'Kontak'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className={scrolled ? 'nav-link' : 'nav-link-light'}>{item}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://wa.me/6281376524303?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20website" target="_blank" rel="noopener noreferrer"
          className="!hidden md:!inline-flex"
          style={{
            padding: '10px 20px', fontSize: 14, borderRadius: 10,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            textDecoration: 'none', transition: 'all 0.4s ease', cursor: 'pointer',
            background: scrolled ? 'linear-gradient(135deg, #0ea5e9, #0284c7)' : 'rgba(255,255,255,0.15)',
            color: 'white',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.25)',
            backdropFilter: scrolled ? 'none' : 'blur(8px)',
            boxShadow: scrolled ? '0 2px 10px rgba(14,165,233,0.3)' : 'none',
          }}>
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#475569' : '#ffffff'} strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '12px 24px 24px', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
          {['Layanan', 'Harga', 'Portofolio', 'Testimoni', 'Kontak'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid #f1f5f9', color: '#475569', fontWeight: 500, fontSize: 15, textDecoration: 'none' }}>
              {item}
            </a>
          ))}
          <a href="https://wa.me/6281376524303?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20website" target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
