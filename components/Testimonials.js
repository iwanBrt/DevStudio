'use client'

const testimonials = [
  { name: 'Rina Susanti', role: 'Pemilik Toko Batik Online', avatar: 'RS', color: '#0ea5e9', text: 'Hasilnya melebihi ekspektasi! Website toko saya jadi lebih profesional dan pelanggan semakin percaya. Proses pengerjaan cepat dan timnya sangat responsif.', rating: 5 },
  { name: 'Budi Hartono', role: 'Pemilik Kos Mahasiswa, Medan', avatar: 'BH', color: '#10b981', text: 'Sistem manajemen kos yang dibuatkan sangat membantu. Sekarang pembayaran lebih mudah dimonitor dan penghuni bisa booking secara online. Worth it banget!', rating: 5 },
  { name: 'Dewi Anggraini', role: 'Founder Startup Edukasi', avatar: 'DA', color: '#8b5cf6', text: 'Developer yang sangat profesional. Komunikasi lancar, deadline tepat waktu, dan kualitas kode bersih. Sudah pakai jasa mereka 3x dan selalu puas.', rating: 5 },
  { name: 'Ahmad Fauzi', role: 'Kepala Sekolah SMP Negeri, Deli Serdang', avatar: 'AF', color: '#f59e0b', text: 'Sistem informasi sekolah yang dibangun sangat membantu administrasi. Data siswa, nilai, dan absensi sekarang semua terdigitalisasi dengan rapi.', rating: 5 },
  { name: 'Sari Wahyuni', role: 'Fotografer Profesional', avatar: 'SW', color: '#ec4899', text: 'Website portofolio saya jadi keren banget! Banyak klien yang bilang pertama kali tertarik karena lihat websitenya. ROI sudah balik modal dalam 2 minggu.', rating: 5 },
  { name: 'Hendra Wijaya', role: 'Direktur CV Maju Jaya', avatar: 'HW', color: '#14b8a6', text: 'Company profile kami sekarang jauh lebih representatif. Desainnya modern, loading cepat, dan SEO-nya bagus. Klien korporat jadi lebih percaya.', rating: 5 },
]

function Stars({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" style={{ padding: '100px 0 120px', background: '#ffffff', position: 'relative' }}>
      {/* Wave bottom — transition to light blue contact */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: 80 }}>
          <path d="M0,40 C480,110 960,10 1440,60 L1440,120 L0,120 Z" fill="rgba(14,165,233,0.04)" />
          <path d="M0,60 C360,120 1080,20 1440,80 L1440,120 L0,120 Z" fill="#f0f9ff" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ color: '#0ea5e9' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Testimoni Klien
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 16 }}>
            Apa Kata Klien Kami?
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
            Kepuasan klien adalah prioritas kami. Berikut pengalaman mereka bekerja bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#ffffff' }}>
              <Stars />
              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 12, borderTop: '1px solid #f1f5f9' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${t.color}15`, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, flexShrink: 0, border: `1px solid ${t.color}20` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: 14, color: '#0f172a', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: '#94a3b8' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
