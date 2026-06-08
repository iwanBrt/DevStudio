'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nama: '', hp: '', layanan: '', pesan: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.nama || !form.hp) return
    const msg = `Halo DevStudio!%0A%0ANama: ${encodeURIComponent(form.nama)}%0ANo HP: ${encodeURIComponent(form.hp)}%0ALayanan: ${encodeURIComponent(form.layanan)}%0APesan: ${encodeURIComponent(form.pesan)}`
    window.open(`https://wa.me/6281376524303?text=${msg}`, '_blank')
    setSent(true)
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid rgba(255, 255, 255, 0.08)',
    fontSize: 15, color: 'white', background: 'rgba(255, 255, 255, 0.02)', outline: 'none',
    fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s',
  }

  return (
    <section id="kontak" style={{ padding: '100px 0', background: '#08090f' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left info */}
          <div>
            <div className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Hubungi Kami
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'white', marginBottom: 16 }}>
              Siap Wujudkan Proyek Anda?
            </h2>
            <p style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.75, marginBottom: 40 }}>
              Ceritakan kebutuhan Anda kepada kami. Konsultasi gratis, tanpa komitmen — kami akan bantu carikan solusi terbaik.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                  label: 'WhatsApp',
                  value: '0813-7652-4303',
                  href: 'https://wa.me/6281376524303',
                  color: '#25d366',
                  bg: 'rgba(37, 211, 102, 0.1)',
                },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                  <div style={{ width: 48, height: 48, background: c.bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0, border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, color: '#64748b', fontWeight: 500, marginBottom: 2 }}>{c.label}</p>
                    <p className="font-display" style={{ fontSize: 16, fontWeight: 600, color: 'white' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              {['Konsultasi Gratis', 'Garansi Revisi', 'Fast Response'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 14px', borderRadius: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#cbd5e1', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(37, 211, 102, 0.1)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#25d366', fontSize: 28 }}>✓</div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 12 }}>Terima kasih!</h3>
                <p style={{ color: '#94a3b8', fontSize: 15 }}>Pesan Anda sudah terkirim ke WhatsApp kami. Kami akan balas segera!</p>
                <button onClick={() => setSent(false)} className="btn-primary" style={{ marginTop: 24 }}>Kirim Pesan Lagi</button>
              </div>
            ) : (
              <>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 6 }}>Kirim Pesan</h3>
                <p style={{ fontSize: 14, color: '#64748b', marginBottom: 28 }}>Isi form di bawah, kami akan balas via WhatsApp.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#cbd5e1', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama Lengkap *</label>
                    <input style={inputStyle} placeholder="Nama Anda" value={form.nama}
                      onChange={e => setForm({ ...form, nama: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#00e5ff'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#cbd5e1', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>No. WhatsApp *</label>
                    <input style={inputStyle} placeholder="08xxxxxxxxxx" value={form.hp}
                      onChange={e => setForm({ ...form, hp: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#00e5ff'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#cbd5e1', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Layanan yang Dibutuhkan</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.layanan}
                      onChange={e => setForm({ ...form, layanan: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#00e5ff'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}>
                      <option value="" style={{ background: '#0e101a' }}>Pilih layanan...</option>
                      <option style={{ background: '#0e101a' }}>Web Company Profile</option>
                      <option style={{ background: '#0e101a' }}>Landing Page</option>
                      <option style={{ background: '#0e101a' }}>Toko Online / Katalog</option>
                      <option style={{ background: '#0e101a' }}>Sistem Informasi</option>
                      <option style={{ background: '#0e101a' }}>Aplikasi Mobile</option>
                      <option style={{ background: '#0e101a' }}>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#cbd5e1', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ceritakan Kebutuhan Anda</label>
                    <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                      placeholder="Deskripsikan proyek atau kebutuhan Anda..."
                      value={form.pesan} onChange={e => setForm({ ...form, pesan: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#00e5ff'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
                  </div>
                  <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px 24px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Kirim via WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
