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
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: '1.5px solid #e2e8f0', fontSize: 15, color: '#0f172a',
    background: '#ffffff', outline: 'none',
    fontFamily: "'Inter', sans-serif", transition: 'all 0.2s',
  }

  return (
    <section id="kontak" style={{ padding: '100px 0 140px', background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)', position: 'relative' }}>
      {/* Wave bottom — transition to dark footer */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: 80 }}>
          <path d="M0,40 C480,100 960,10 1440,60 L1440,120 L0,120 Z" fill="rgba(15,23,42,0.3)" />
          <path d="M0,60 C360,110 1080,30 1440,80 L1440,120 L0,120 Z" fill="#0f172a" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Hubungi Kami
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: 16 }}>
              Siap Wujudkan Proyek Anda?
            </h2>
            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.75, marginBottom: 40 }}>
              Ceritakan kebutuhan Anda kepada kami. Konsultasi gratis, tanpa komitmen — kami akan bantu carikan solusi terbaik.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a href="https://wa.me/6281376524303" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                <div style={{ width: 48, height: 48, background: '#dcfce7', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', flexShrink: 0, border: '1px solid #bbf7d0' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500, marginBottom: 2 }}>WhatsApp</p>
                  <p className="font-display" style={{ fontSize: 16, fontWeight: 600, color: '#0f172a' }}>0813-7652-4303</p>
                </div>
              </a>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }}>
              {['Konsultasi Gratis', 'Garansi Revisi', 'Fast Response'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ffffff', border: '1px solid #e2e8f0', padding: '8px 14px', borderRadius: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, padding: 32, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#25d366', fontSize: 28 }}>✓</div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>Terima kasih!</h3>
                <p style={{ color: '#64748b', fontSize: 15 }}>Pesan Anda sudah terkirim ke WhatsApp kami.</p>
                <button onClick={() => setSent(false)} className="btn-primary" style={{ marginTop: 24 }}>Kirim Pesan Lagi</button>
              </div>
            ) : (
              <>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>Kirim Pesan</h3>
                <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 28 }}>Isi form di bawah, kami akan balas via WhatsApp.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama Lengkap *</label>
                    <input style={inputStyle} placeholder="Nama Anda" value={form.nama} onChange={e => setForm({...form, nama: e.target.value})} onFocus={e => e.target.style.borderColor='#0ea5e9'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>No. WhatsApp *</label>
                    <input style={inputStyle} placeholder="08xxxxxxxxxx" value={form.hp} onChange={e => setForm({...form, hp: e.target.value})} onFocus={e => e.target.style.borderColor='#0ea5e9'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Layanan yang Dibutuhkan</label>
                    <select style={{...inputStyle, cursor: 'pointer'}} value={form.layanan} onChange={e => setForm({...form, layanan: e.target.value})} onFocus={e => e.target.style.borderColor='#0ea5e9'} onBlur={e => e.target.style.borderColor='#e2e8f0'}>
                      <option value="">Pilih layanan...</option>
                      <option>Web Company Profile</option>
                      <option>Landing Page</option>
                      <option>Toko Online / Katalog</option>
                      <option>Sistem Informasi</option>
                      <option>Aplikasi Mobile</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ceritakan Kebutuhan Anda</label>
                    <textarea style={{...inputStyle, minHeight: 100, resize: 'vertical'}} placeholder="Deskripsikan proyek atau kebutuhan Anda..." value={form.pesan} onChange={e => setForm({...form, pesan: e.target.value})} onFocus={e => e.target.style.borderColor='#0ea5e9'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
                  </div>
                  <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px 24px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
