'use client'

export default function Hero() {
  return (
    <section style={{ paddingTop: 130, paddingBottom: 120, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0369a1 100%)' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Wave bottom divider — multi layered */}
      <div className="wave-divider bottom">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" style={{ height: 120 }}>
          <path d="M0,80 C360,160 1080,0 1440,80 L1440,180 L0,180 Z" fill="rgba(255,255,255,0.15)" />
          <path d="M0,100 C320,180 1100,20 1440,100 L1440,180 L0,180 Z" fill="rgba(255,255,255,0.3)" />
          <path d="M0,120 C280,180 1120,60 1440,120 L1440,180 L0,180 Z" fill="#f8fafc" />
        </svg>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }} className="animate-fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5))' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Professional</span>
            <span style={{ height: 1, width: 40, background: 'linear-gradient(90deg, rgba(255,255,255,0.5), transparent)' }} />
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#ffffff', marginBottom: 16 }}>
            Business Website<br />
            <span style={{ color: '#bae6fd' }}>Design</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.8)', fontWeight: 400, maxWidth: 540, margin: '0 auto' }}>Modern Layout for Startups and Companies</p>
        </div>

        {/* Browser Showcase */}
        <div className="animate-fade-up animate-delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 64 }}>
          <div style={{ width: '100%', maxWidth: 720, aspectRatio: '16/10', background: '#ffffff', borderRadius: 16, border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: '#f1f5f9', borderRadius: 8, padding: '4px 24px', fontSize: 11, color: '#94a3b8', fontWeight: 500, border: '1px solid #e2e8f0' }}>biznext.dev</div>
              </div>
            </div>
            <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: 'linear-gradient(135deg, #0ea5e9, #10b981)' }} />
                  <span style={{ fontSize: 11, color: '#0f172a', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>BizNext</span>
                </div>
                <div style={{ display: 'flex', gap: 12, fontSize: 9, color: '#94a3b8', fontWeight: 500 }}>
                  <span>Home</span><span>About</span><span>Services</span><span>Projects</span>
                </div>
                <div style={{ background: 'linear-gradient(135deg, #0ea5e9, #10b981)', color: 'white', padding: '4px 10px', borderRadius: 6, fontSize: 8, fontWeight: 600 }}>Contact Us</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 16, flex: 1, alignItems: 'center' }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 8 }}>Grow Your<br />Business Online</h3>
                  <p style={{ fontSize: 9, color: '#94a3b8', lineHeight: 1.5, marginBottom: 12 }}>We deliver innovative digital solutions that elevate your brand.</p>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #10b981)', color: 'white', padding: '4px 10px', borderRadius: 6, fontSize: 8, fontWeight: 600 }}>Get Started</span>
                    <span style={{ border: '1px solid #e2e8f0', color: '#475569', padding: '4px 10px', borderRadius: 6, fontSize: 8 }}>▶ Watch Video</span>
                  </div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 9, color: '#0f172a', fontWeight: 600 }}>+ 68% Growth</span>
                    <span style={{ fontSize: 7, color: '#10b981', background: '#d1fae5', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>Monthly</span>
                  </div>
                  <div style={{ height: 44, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                    {[20,35,25,45,55,40,75,90,80].map((h,idx)=>(
                      <div key={idx} style={{ flex:1, height:`${h}%`, background: idx===7?'linear-gradient(to top, #0ea5e9, #10b981)':'#e0f2fe', borderRadius:'3px 3px 0 0' }}/>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: 10, fontSize: 8, color: '#94a3b8' }}>
                <span>Trusted by 500+ Companies</span>
                <div style={{ display: 'flex', gap: 10, fontWeight: 600, color: '#cbd5e1' }}>
                  <span>Google</span><span>Microsoft</span><span>Slack</span><span>Dropbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 64 }} className="animate-fade-up animate-delay-2">
          {[
            { icon: '🎨', title: 'Website Design', hl: false },
            { icon: '📈', title: 'SEO & Growth', hl: true },
            { icon: '🛒', title: 'E-Commerce', hl: false },
            { icon: '💬', title: '24/7 Support', hl: false },
          ].map((c, i) => (
            <div key={i} style={{
              background: c.hl ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              border: c.hl ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.15)',
              borderRadius: 20, padding: '30px 24px', textAlign: 'center',
              backdropFilter: 'blur(12px)',
              boxShadow: c.hl ? '0 12px 32px rgba(0,0,0,0.15)' : '0 4px 16px rgba(0,0,0,0.08)',
              transform: c.hl ? 'translateY(-8px)' : 'none', transition: 'all 0.3s ease',
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>
                {c.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>{c.title}</h3>
              <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 12 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
                <span style={{ width: 12, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.6)' }} />
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:px-10 md:py-6 animate-fade-up animate-delay-3" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 24, backdropFilter: 'blur(12px)', marginBottom: 64 }}>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full md:w-auto">
            {[{ val: '20+', label: 'Projects' }, { val: '98%', label: 'Satisfaction' }, { val: '24/7', label: 'Support' }].map((s, i) => (
              <div key={i} className={`flex-1 min-w-[120px] ${i > 0 ? 'sm:border-l sm:pl-8 md:pl-12' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 2 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <a href="#kontak" className="btn-primary w-full md:w-auto justify-center" style={{ padding: '14px 28px', fontSize: 15, background: 'white', color: '#0ea5e9', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
            Get Free Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        {/* Footer badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }} className="animate-fade-up animate-delay-4">
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))' }} />
          <div style={{ display: 'flex', gap: 16, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Modern</span><span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span><span>Fast</span><span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span><span>Secure</span><span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span><span>Scalable</span>
          </div>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)' }} />
        </div>
      </div>
    </section>
  )
}
