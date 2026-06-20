'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '60px 0 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span className="font-display" style={{ fontWeight: 700, fontSize: 18, color: 'white', letterSpacing: '-0.02em' }}>
                Dev<span style={{ color: '#0ea5e9' }}>Studio</span>
              </span>
            </a>
            <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.75, maxWidth: 320, marginBottom: 24 }}>
              Jasa pembuatan website & aplikasi custom profesional untuk semua jenis bisnis. Mulai dari Rp 200.000.
            </p>
            <a href="https://wa.me/6281376524303" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d366', color: 'white', padding: '10px 20px', borderRadius: 10, textDecoration: 'none', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              0813-7652-4303
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="font-display" style={{ fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Layanan</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Website & Profil Digital', 'Sistem Informasi', 'Web Application', 'Aplikasi Mobile', 'Maintenance'].map(l => (
                <li key={l}><a href="#layanan" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#0ea5e9'} onMouseLeave={e => e.target.style.color = '#94a3b8'}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display" style={{ fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Perusahaan</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Tentang Kami', 'Portofolio', 'Testimoni', 'Blog', 'Kontak'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#0ea5e9'} onMouseLeave={e => e.target.style.color = '#94a3b8'}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 13, color: '#64748b' }}>
            © {new Date().getFullYear()} DevStudio. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
