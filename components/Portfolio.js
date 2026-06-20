'use client'

const projects = [
  { title: 'DFA Pattern Recognition', tag: 'Web App', tagColor: '#38bdf8', desc: 'Aplikasi web interaktif untuk visualisasi dan simulasi pengenalan pola menggunakan DFA secara realtime.', tech: ['React', 'Tailwind CSS', 'HTML5 Canvas'], href: 'https://dfa-flame.vercel.app/' },
  { title: 'UlosBudaya — Interactive Weaving', tag: 'E-Learning', tagColor: '#c084fc', desc: 'Platform edukasi tenun Ulos Batak tradisional untuk melestarikan warisan budaya Indonesia.', tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'], href: 'https://ulos.vercel.app/' },
  { title: 'KeripikKu — Kentang Premium', tag: 'E-Commerce', tagColor: '#34d399', desc: 'Landing page dan katalog produk interaktif untuk penjualan keripik kentang premium.', tech: ['React', 'CSS Modules'], href: 'https://keripik-plum.vercel.app/' },
  { title: 'Quantum Physics Simulation', tag: 'Simulator', tagColor: '#c084fc', desc: 'Simulator sains interaktif untuk memvisualisasikan mekanika gelombang dan partikel.', tech: ['JavaScript', 'HTML5 Canvas', 'Three.js'], href: 'https://simulasi-fisika-kuantum.vercel.app/' },
  { title: 'Kost Rilen — Hunian Eksklusif', tag: 'Website', tagColor: '#fbbf24', desc: 'Website profil kost elit dan eksklusif di kota Medan dengan galeri foto dan fasilitas premium.', tech: ['Next.js', 'Tailwind CSS'], href: 'https://kost-rilen.vercel.app/' },
  { title: 'Salon Saringar Pakpak', tag: 'Company Profile', tagColor: '#f472b6', desc: 'Website promosi salon kecantikan modern dengan informasi layanan dan katalog harga.', tech: ['React', 'Tailwind CSS'], href: 'https://salon-three-mu.vercel.app/' },
  { title: 'TREEA HOUSE — Kost Elite', tag: 'Website', tagColor: '#38bdf8', desc: 'Platform informasi dan sewa kamar kost premium di Medan untuk mahasiswa dan karyawan.', tech: ['React', 'Next.js', 'Tailwind CSS'], href: 'https://treeahouse.vercel.app/' },
  { title: 'BOS MOCHI MEDAN', tag: 'Landing Page', tagColor: '#2dd4bf', desc: 'Website landing page dan katalog jajanan mochi viral Medan dengan integrasi order WhatsApp.', tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'], href: 'https://mochimedan.web.id/' },
  { title: 'Si-Klimatologi (BMKG Sumut)', tag: 'Sistem Informasi', tagColor: '#38bdf8', desc: 'Sistem Informasi Resmi UPT Stasiun Klimatologi BMKG Sumatera Utara.', tech: ['Next.js', 'Tailwind CSS', 'Leaflet.js', 'Chart.js'], href: 'https://iklimsumut.com/' },
]

export default function Portfolio() {
  return (
    <section id="portofolio" style={{ padding: '100px 0 140px', background: 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)', position: 'relative' }}>
      {/* Wave bottom — transition to white (testimonials) */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ height: 90 }}>
          <path d="M0,60 C360,0 720,120 1080,40 C1260,0 1440,80 1440,60 L1440,140 L0,140 Z" fill="rgba(255,255,255,0.2)" />
          <path d="M0,80 C480,140 960,20 1440,90 L1440,140 L0,140 Z" fill="rgba(255,255,255,0.4)" />
          <path d="M0,100 C320,140 1100,50 1440,110 L1440,140 L0,140 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="animate-fade-up">
          <div className="section-badge on-dark" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
            Portofolio
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', marginBottom: 16 }}>
            Beberapa Proyek yang Sudah Kami Kerjakan
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto' }}>
            Setiap proyek dikerjakan dengan penuh dedikasi dan perhatian terhadap detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 20, padding: 28, backdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: p.tagColor, fontSize: 12, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif", padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)' }}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 8, lineHeight: 1.4 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 18 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: '10px 16px', fontSize: 13, justifyContent: 'center', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, transition: 'all 0.2s' }}>
                  Live Site
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href={`https://wa.me/6281376524303?text=Halo,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(p.title)}`}
                  target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, background: 'white', color: '#0ea5e9', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://wa.me/6281376524303?text=Halo,%20saya%20ingin%20melihat%20portofolio%20lebih%20lengkap"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: 'white', color: '#0ea5e9', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.3s ease' }}>
            Diskusikan Proyek Anda
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
