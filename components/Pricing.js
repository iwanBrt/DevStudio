'use client'

const plans = [
  { name: 'Starter', price: '200rb', priceNote: '— mulai dari', desc: 'Cocok untuk personal, portofolio, dan UMKM yang baru mulai go-digital.', features: ['Landing Page / 1 halaman', 'Desain responsif (mobile-friendly)', 'Domain .com atau .id (opsional)', 'Hosting 1 tahun', 'Formulir kontak', 'Revisi 2x'], cta: 'Pesan Sekarang', popular: false },
  { name: 'Business', price: '800rb', priceNote: '— mulai dari', desc: 'Ideal untuk bisnis yang membutuhkan website profesional dengan fitur lengkap.', features: ['Website multi-halaman (5–10 halaman)', 'Company Profile / Portofolio', 'Katalog Produk', 'CMS sederhana (kelola konten sendiri)', 'Integrasi WhatsApp & Media Sosial', 'SEO Dasar', 'Revisi 5x'], cta: 'Pesan Sekarang', popular: true },
  { name: 'Custom System', price: 'Custom', priceNote: '— harga sesuai kebutuhan', desc: 'Untuk sistem informasi, web app, atau aplikasi dengan fitur khusus.', features: ['Analisis kebutuhan mendalam', 'Sistem Informasi custom', 'Dashboard & laporan', 'Login & manajemen user', 'Integrasi API / payment gateway', 'Maintenance & support 3 bulan', 'Revisi unlimited (scope terdefinisi)'], cta: 'Diskusi Kebutuhan', popular: false },
]

export default function Pricing() {
  return (
    <section id="harga" style={{ padding: '100px 0 140px', background: '#ffffff', position: 'relative' }}>
      {/* Wave bottom — transition to portfolio (light blue gradient) */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ height: 90 }}>
          <path d="M0,50 C300,130 600,10 900,70 C1200,130 1440,30 1440,50 L1440,140 L0,140 Z" fill="rgba(14,165,233,0.06)" />
          <path d="M0,80 C360,130 720,30 1080,90 C1260,120 1440,60 1440,80 L1440,140 L0,140 Z" fill="#0ea5e9" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Paket Harga
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 16 }}>
            Transparan & Terjangkau
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 520, margin: '0 auto' }}>
            Harga yang jujur tanpa biaya tersembunyi. Konsultasi gratis sebelum memulai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div key={i} className="pricing-card" style={{
              background: p.popular ? 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)' : '#ffffff',
              border: p.popular ? '2px solid #0ea5e9' : '1px solid #e2e8f0',
              boxShadow: p.popular ? '0 12px 40px rgba(14,165,233,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
              borderRadius: 20,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = p.popular ? '0 16px 48px rgba(14,165,233,0.18)' : '0 12px 32px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = p.popular ? '0 12px 40px rgba(14,165,233,0.12)' : '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              {p.popular && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', color: 'white', padding: '6px 20px', borderRadius: 100, fontSize: 13, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(14,165,233,0.25)' }}>
                  ⭐ Paling Populer
                </div>
              )}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0ea5e9', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span className="font-display" style={{ fontSize: 36, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Rp {p.price}</span>
                  <span style={{ fontSize: 14, color: '#94a3b8' }}>{p.priceNote}</span>
                </div>
                <p style={{ fontSize: 15, color: '#64748b', marginTop: 12, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 24, marginBottom: 28 }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={`https://wa.me/6281376524303?text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(p.name)}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px 24px', borderRadius: 12, background: p.popular ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : '#ffffff', border: p.popular ? 'none' : '1.5px solid #e2e8f0', color: p.popular ? 'white' : '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: p.popular ? '0 4px 16px rgba(14,165,233,0.25)' : 'none' }}
                onMouseEnter={e => { if (!p.popular) { e.currentTarget.style.borderColor = '#0ea5e9'; e.currentTarget.style.color = '#0ea5e9'; e.currentTarget.style.background = '#f0f9ff' } else { e.currentTarget.style.filter = 'brightness(1.05)' } }}
                onMouseLeave={e => { if (!p.popular) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.background = '#ffffff' } else { e.currentTarget.style.filter = 'none' } }}
              >
                {p.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: '#94a3b8' }}>
          Semua harga bisa disesuaikan. <a href="https://wa.me/6281376524303" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', fontWeight: 600 }}>Chat kami</a> untuk diskusi lebih lanjut.
        </p>
      </div>
    </section>
  )
}
