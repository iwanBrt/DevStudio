'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(8, 9, 15, 0.8)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, background: 'linear-gradient(135deg, #3a56e8 0%, #00e5ff 100%)', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 12px rgba(58, 86, 232, 0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <span className="font-display" style={{ fontWeight: 700, fontSize: 18, color: 'white', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            Dev<span style={{ color: '#00e5ff' }}>Studio</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ gap: 32, alignItems: 'center' }} className="!hidden md:!flex">
          {['Layanan', 'Harga', 'Portofolio', 'Testimoni', 'Kontak'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://wa.me/6281376524303?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20website" target="_blank" rel="noopener noreferrer"
          className="btn-primary !hidden md:!inline-flex" style={{ padding: '10px 20px', fontSize: 14 }}>
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: '#0c0d14', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 24px 24px' }}>
          {['Layanan', 'Harga', 'Portofolio', 'Testimoni', 'Kontak'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#94a3b8', fontWeight: 500, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>
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
