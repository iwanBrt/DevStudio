'use client'

const testimonials = [
  {
    name: 'Rina Susanti',
    role: 'Pemilik Toko Batik Online',
    avatar: 'RS',
    color: 'rgba(0, 229, 255, 0.1)',
    textColor: '#00e5ff',
    text: 'Hasilnya melebihi ekspektasi! Website toko saya jadi lebih profesional dan pelanggan semakin percaya. Proses pengerjaan cepat dan timnya sangat responsif.',
    rating: 5,
  },
  {
    name: 'Budi Hartono',
    role: 'Pemilik Kos Mahasiswa, Medan',
    avatar: 'BH',
    color: 'rgba(58, 86, 232, 0.15)',
    textColor: '#3a56e8',
    text: 'Sistem manajemen kos yang dibuatkan sangat membantu. Sekarang pembayaran lebih mudah dimonitor dan penghuni bisa booking secara online. Worth it banget!',
    rating: 5,
  },
  {
    name: 'Dewi Anggraini',
    role: 'Founder Startup Edukasi',
    avatar: 'DA',
    color: 'rgba(168, 85, 247, 0.1)',
    textColor: '#a855f7',
    text: 'Developer yang sangat profesional. Komunikasi lancar, deadline tepat waktu, dan kualitas kode bersih. Sudah pakai jasa mereka 3x dan selalu puas.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Kepala Sekolah SMP Negeri, Deli Serdang',
    avatar: 'AF',
    color: 'rgba(245, 158, 11, 0.1)',
    textColor: '#f59e0b',
    text: 'Sistem informasi sekolah yang dibangun sangat membantu administrasi. Data siswa, nilai, dan absensi sekarang semua terdigitalisasi dengan rapi.',
    rating: 5,
  },
  {
    name: 'Sari Wahyuni',
    role: 'Fotografer Profesional',
    avatar: 'SW',
    color: 'rgba(236, 72, 153, 0.1)',
    textColor: '#ec4899',
    text: 'Website portofolio saya jadi keren banget! Banyak klien yang bilang pertama kali tertarik karena lihat websitenya. ROI sudah balik modal dalam 2 minggu.',
    rating: 5,
  },
  {
    name: 'Hendra Wijaya',
    role: 'Direktur CV Maju Jaya',
    avatar: 'HW',
    color: 'rgba(16, 185, 129, 0.1)',
    textColor: '#10b981',
    text: 'Company profile kami sekarang jauh lebih representatif. Desainnya modern, loading cepat, dan SEO-nya bagus. Klien korporat jadi lebih percaya.',
    rating: 5,
  },
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
    <section id="testimoni" style={{ padding: '100px 0', background: '#0b0d19' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-badge" style={{ margin: '0 auto 16px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Testimoni Klien
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'white', marginBottom: 16 }}>
            Apa Kata Klien Kami?
          </h2>
          <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 480, margin: '0 auto' }}>
            Kepuasan klien adalah prioritas kami. Berikut pengalaman mereka bekerja bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Stars />
              <p style={{ fontSize: 15, color: '#cbd5e1', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 12, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: t.color, color: t.textColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, flexShrink: 0,
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display" style={{ fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: '#64748b' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
