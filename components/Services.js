'use client'

const services = [
  { icon: '🌐', title: 'Website & Profil Digital', desc: 'Tampilkan bisnis Anda secara profesional di dunia digital.', items: ['Web Company Profile', 'Landing Page Promosi', 'Portfolio & Digital Journal', 'Katalog Produk (UMKM)', 'Blog / Portal Berita'] },
  { icon: '⚙️', title: 'Sistem Informasi & Web Apps', desc: 'Solusi digital cerdas untuk operasional bisnis yang lebih efisien.', items: ['Sistem Informasi Sekolah', 'Manajemen Properti (Kos/Apartemen)', 'Dashboard Visualisasi Data', 'Absensi Karyawan Digital', 'Custom Web Application'] },
  { icon: '📱', title: 'Aplikasi Mobile & Lainnya', desc: 'Hadir di genggaman pelanggan Anda dengan aplikasi mobile modern.', items: ['Aplikasi Android & iOS', 'Progressive Web App (PWA)', 'Integrasi Payment Gateway', 'API & Backend Custom', 'Maintenance & Support'] },
]

export default function Services() {
  return (
    <section id="layanan" style={{ padding: '100px 0 120px', background: '#f8fafc', position: 'relative' }}>
      {/* Wave bottom divider — transition to white (pricing) */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: 80 }}>
          <path d="M0,40 C480,120 960,0 1440,60 L1440,120 L0,120 Z" fill="rgba(14,165,233,0.04)" />
          <path d="M0,60 C400,110 1040,20 1440,80 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Layanan Kami
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 16 }}>
            Semua yang Anda Butuhkan
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 520, margin: '0 auto' }}>
            Dari website sederhana hingga sistem yang kompleks, kami siap mewujudkan kebutuhan digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card" style={{ background: '#ffffff' }}>
              <div style={{ width: 52, height: 52, background: '#e0f2fe', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 24 }}>
                {s.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, color: '#64748b', marginBottom: 20, lineHeight: 1.6 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#475569' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
