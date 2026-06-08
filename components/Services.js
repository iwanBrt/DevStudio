'use client'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: 'Website & Profil Digital',
    desc: 'Tampilkan bisnis Anda secara profesional di dunia digital.',
    items: ['Web Company Profile', 'Landing Page Promosi', 'Portfolio & Digital Journal', 'Katalog Produk (UMKM)', 'Blog / Portal Berita'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Sistem Informasi & Web Apps',
    desc: 'Solusi digital cerdas untuk operasional bisnis yang lebih efisien.',
    items: ['Sistem Informasi Sekolah', 'Manajemen Properti (Kos/Apartemen)', 'Dashboard Visualisasi Data', 'Absensi Karyawan Digital', 'Custom Web Application'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Aplikasi Mobile & Lainnya',
    desc: 'Hadir di genggaman pelanggan Anda dengan aplikasi mobile modern.',
    items: ['Aplikasi Android & iOS', 'Progressive Web App (PWA)', 'Integrasi Payment Gateway', 'API & Backend Custom', 'Maintenance & Support'],
  },
]

export default function Services() {
  return (
    <section id="layanan" style={{ padding: '100px 0', background: '#0b0d19' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Layanan Kami
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'white', marginBottom: 16 }}>
            Semua yang Anda Butuhkan
          </h2>
          <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 520, margin: '0 auto' }}>
            Dari website sederhana hingga sistem yang kompleks, kami siap mewujudkan kebutuhan digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 10, letterSpacing: '-0.01em' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, color: '#94a3b8', marginBottom: 20, lineHeight: 1.6 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#cbd5e1' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
