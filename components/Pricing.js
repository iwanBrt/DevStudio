'use client'

const plans = [
  {
    name: 'Starter',
    price: '200rb',
    priceNote: '— mulai dari',
    desc: 'Cocok untuk personal, portofolio, dan UMKM yang baru mulai go-digital.',
    features: [
      'Landing Page / 1 halaman',
      'Desain responsif (mobile-friendly)',
      'Domain .com atau .id (opsional)',
      'Hosting 1 tahun',
      'Formulir kontak',
      'Revisi 2x',
    ],
    cta: 'Pesan Sekarang',
    popular: false,
    accent: 'rgba(255, 255, 255, 0.08)',
  },
  {
    name: 'Business',
    price: '800rb',
    priceNote: '— mulai dari',
    desc: 'Ideal untuk bisnis yang membutuhkan website profesional dengan fitur lengkap.',
    features: [
      'Website multi-halaman (5–10 halaman)',
      'Company Profile / Portofolio',
      'Katalog Produk',
      'CMS sederhana (kelola konten sendiri)',
      'Integrasi WhatsApp & Media Sosial',
      'SEO Dasar',
      'Revisi 5x',
    ],
    cta: 'Pesan Sekarang',
    popular: true,
    accent: '#3a56e8',
  },
  {
    name: 'Custom System',
    price: 'Custom',
    priceNote: '— harga sesuai kebutuhan',
    desc: 'Untuk sistem informasi, web app, atau aplikasi dengan fitur khusus.',
    features: [
      'Analisis kebutuhan mendalam',
      'Sistem Informasi custom',
      'Dashboard & laporan',
      'Login & manajemen user',
      'Integrasi API / payment gateway',
      'Maintenance & support 3 bulan',
      'Revisi unlimited (scope terdefinisi)',
    ],
    cta: 'Diskusi Kebutuhan',
    popular: false,
    accent: 'rgba(255, 255, 255, 0.08)',
  },
]

export default function Pricing() {
  return (
    <section id="harga" style={{ padding: '100px 0', background: '#08090f' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Paket Harga
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'white', marginBottom: 16 }}>
            Transparan & Terjangkau
          </h2>
          <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 520, margin: '0 auto' }}>
            Harga yang jujur tanpa biaya tersembunyi. Konsultasi gratis sebelum memulai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div key={i} className="pricing-card" style={{
              background: p.popular ? '#111425' : 'rgba(17, 20, 37, 0.4)',
              border: p.popular ? '2px solid #3a56e8' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: p.popular ? '0 15px 45px rgba(58, 86, 232, 0.25)' : 'none',
            }}
              onMouseEnter={e => {
                if (!p.popular) {
                  e.currentTarget.style.borderColor = 'rgba(58, 86, 232, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(58, 86, 232, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                } else {
                  e.currentTarget.style.borderColor = '#00e5ff';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(0, 229, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={e => {
                if (!p.popular) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                } else {
                  e.currentTarget.style.borderColor = '#3a56e8';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(58, 86, 232, 0.25)';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              {p.popular && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #3a56e8 0%, #00e5ff 100%)', color: 'white', padding: '6px 20px',
                  borderRadius: 100, fontSize: 13, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0, 229, 255, 0.3)'
                }}>
                  ⭐ Paling Populer
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#00e5ff', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {p.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span className="font-display" style={{ fontSize: 36, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                    Rp {p.price}
                  </span>
                  <span style={{ fontSize: 14, color: '#94a3b8' }}>{p.priceNote}</span>
                </div>
                <p style={{ fontSize: 15, color: '#94a3b8', marginTop: 12, lineHeight: 1.6 }}>{p.desc}</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: 24, marginBottom: 28 }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#cbd5e1', lineHeight: 1.5 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={`https://wa.me/6281376524303?text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(p.name)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  width: '100%', padding: '14px 24px', borderRadius: 12,
                  background: p.popular ? 'linear-gradient(135deg, #3a56e8 0%, #00e5ff 100%)' : 'rgba(255, 255, 255, 0.03)',
                  border: p.popular ? 'none' : '1.5px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15,
                  textDecoration: 'none', transition: 'all 0.2s ease', cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  if (p.popular) {
                    e.currentTarget.style.filter = 'brightness(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,229,255,0.4)';
                  }
                  else {
                    e.currentTarget.style.borderColor = '#00e5ff';
                    e.currentTarget.style.color = '#00e5ff';
                    e.currentTarget.style.background = 'rgba(58, 86, 232, 0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (p.popular) {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                  else {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }
                }}
              >
                {p.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: '#64748b' }}>
          Semua harga bisa disesuaikan. <a href="https://wa.me/6281376524303" target="_blank" rel="noopener noreferrer" style={{ color: '#00e5ff', fontWeight: 600 }}>Chat kami</a> untuk diskusi lebih lanjut.
        </p>
      </div>
    </section>
  )
}
