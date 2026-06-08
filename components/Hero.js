'use client'

export default function Hero() {
  return (
    <section style={{ paddingTop: 130, paddingBottom: 80, position: 'relative', overflow: 'hidden', background: '#08090f' }}>
      {/* Background radial gradients for glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600,
        background: 'radial-gradient(circle, rgba(58, 86, 232, 0.12) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '10%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Title and Badges */}
        <div style={{ textAlign: 'center', marginBottom: 48 }} className="animate-fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #3a56e8)' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.25em', color: '#00e5ff', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Professional
            </span>
            <span style={{ height: 1, width: 40, background: 'linear-gradient(90deg, #3a56e8, transparent)' }} />
          </div>
          
          <h1 className="font-display" style={{
            fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', color: 'white', marginBottom: 16,
          }}>
            Business Website<br />
            <span style={{
              background: 'linear-gradient(135deg, #3a56e8 0%, #00e5ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(58, 86, 232, 0.3))'
            }}>Design</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#94a3b8', fontWeight: 400, maxWidth: 540, margin: '0 auto' }}>
            Modern Layout for Startups and Companies
          </p>
        </div>

        {/* Centerpiece: Laptop Showcase */}
        <div className="animate-fade-up animate-delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 64, position: 'relative' }}>
          
          {/* Laptop Screen & Bezel */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 720,
            aspectRatio: '16/10',
            background: '#0c0d14',
            borderRadius: '20px 20px 0 0',
            border: '8px solid #1a1d2d',
            borderBottom: 'none',
            boxShadow: '0 25px 60px -15px rgba(58, 86, 232, 0.25), 0 0 40px rgba(0, 229, 255, 0.1) inset',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Inner Dashboard UI Mockup */}
            <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12, background: 'radial-gradient(circle at top, #111425 0%, #07090e 100%)' }}>
              
              {/* Dashboard Nav */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                  <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, marginLeft: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>BizNext</span>
                </div>
                <div style={{ display: 'flex', gap: 10, fontSize: 8, color: '#64748b' }}>
                  <span>Home</span><span>About</span><span>Services</span><span>Projects</span>
                </div>
                <div style={{ background: '#3a56e8', color: 'white', padding: '3px 8px', borderRadius: 4, fontSize: 7, fontWeight: 700 }}>Contact Us</div>
              </div>

              {/* Dashboard Hero Content */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 16, flex: 1, alignItems: 'center' }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 8 }}>
                    Grow Your<br />Business Online
                  </h3>
                  <p style={{ fontSize: 9, color: '#64748b', lineHeight: 1.4, marginBottom: 12 }}>
                    We deliver innovative digital solutions that elevate your brand and drive actual business results.
                  </p>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <span style={{ background: '#00e5ff', color: '#08090f', padding: '4px 10px', borderRadius: 4, fontSize: 8, fontWeight: 700 }}>Get Started</span>
                    <span style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '4px 10px', borderRadius: 4, fontSize: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
                      ▶ Watch Video
                    </span>
                  </div>
                </div>

                {/* Dashboard Chart Mock */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 10, position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 8, color: 'white', fontWeight: 600 }}>+ 68% Growth</span>
                    <span style={{ fontSize: 6, color: '#00e5ff', background: 'rgba(0, 229, 255, 0.1)', padding: '2px 4px', borderRadius: 2 }}>Monthly</span>
                  </div>
                  {/* Mock Chart Lines */}
                  <div style={{ height: 40, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                    {[20, 35, 25, 45, 55, 40, 75, 90, 80].map((h, idx) => (
                      <div key={idx} style={{
                        flex: 1,
                        height: `${h}%`,
                        background: idx === 7 ? 'linear-gradient(to top, #3a56e8, #00e5ff)' : 'rgba(58, 86, 232, 0.2)',
                        borderRadius: '2px 2px 0 0',
                        boxShadow: idx === 7 ? '0 0 10px rgba(0, 229, 255, 0.5)' : 'none'
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dashboard Partner Logos */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 10, fontSize: 8, color: '#475569' }}>
                <span>Trusted by 500+ Companies</span>
                <div style={{ display: 'flex', gap: 8, fontWeight: 600 }}>
                  <span>Google</span>
                  <span>Microsoft</span>
                  <span>Slack</span>
                  <span>Dropbox</span>
                </div>
              </div>

            </div>
          </div>

          {/* Laptop Base/Keyboard */}
          <div style={{
            width: '100%',
            maxWidth: 800,
            height: 14,
            background: 'linear-gradient(to bottom, #2d3142 0%, #151821 100%)',
            borderRadius: '0 0 16px 16px',
            borderTop: '2px solid #3d425a',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative',
          }}>
            {/* Opening Notch */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              background: '#151821',
              borderRadius: '0 0 6px 6px'
            }} />
          </div>
        </div>

        {/* 4 Floating Cards: Website Design, SEO & Growth, E-Commerce, 24/7 Support */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
          marginBottom: 64
        }} className="animate-fade-up animate-delay-2">
          
          {/* Card 1: Website Design */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: 20,
            padding: '30px 24px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>Website Design</h3>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
              <span style={{ width: 12, height: 4, borderRadius: 2, background: '#00e5ff' }} />
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
            </div>
          </div>

          {/* Card 2: SEO & Growth (Highlighted) */}
          <div className="card" style={{
            background: 'linear-gradient(135deg, #3a56e8 0%, #00e5ff 100%)',
            border: 'none',
            borderRadius: 20,
            padding: '30px 24px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(58, 86, 232, 0.35)',
            transform: 'translateY(-8px)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>SEO & Growth</h3>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'white' }} />
              <span style={{ width: 12, height: 4, borderRadius: 2, background: 'white' }} />
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'white' }} />
            </div>
          </div>

          {/* Card 3: E-Commerce */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: 20,
            padding: '30px 24px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>E-Commerce</h3>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
              <span style={{ width: 12, height: 4, borderRadius: 2, background: '#00e5ff' }} />
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
            </div>
          </div>

          {/* Card 4: 24/7 Support */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: 20,
            padding: '30px 24px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>24/7 Support</h3>
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
              <span style={{ width: 12, height: 4, borderRadius: 2, background: '#00e5ff' }} />
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00e5ff' }} />
            </div>
          </div>

        </div>

        {/* Stats & CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:px-10 md:py-6 bg-white/[0.02] border border-white/[0.06] rounded-[24px] backdrop-blur-md mb-16 animate-fade-up animate-delay-3">
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full md:w-auto">
            <div className="flex-1 min-w-[120px]">
              <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 2 }}>
                20+
              </div>
              <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Projects
              </div>
            </div>
            
            <div className="flex-1 min-w-[120px] sm:border-l border-white/10 sm:pl-8 md:pl-12">
              <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 2 }}>
                98%
              </div>
              <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Satisfaction
              </div>
            </div>

            <div className="flex-1 min-w-[120px] sm:border-l border-white/10 sm:pl-8 md:pl-12">
              <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 2 }}>
                24/7
              </div>
              <div style={{ fontSize: 13, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Support
              </div>
            </div>
          </div>

          <a href="#kontak" className="btn-primary w-full md:w-auto justify-center" style={{ padding: '14px 28px', fontSize: 15 }}>
            Get Free Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Footer badges: Modern • Fast • Secure • Scalable */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }} className="animate-fade-up animate-delay-4">
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08))' }} />
          <div style={{ display: 'flex', gap: 16, fontSize: 12, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Modern</span>
            <span style={{ color: '#3a56e8' }}>•</span>
            <span>Fast</span>
            <span style={{ color: '#3a56e8' }}>•</span>
            <span>Secure</span>
            <span style={{ color: '#3a56e8' }}>•</span>
            <span>Scalable</span>
          </div>
          <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent)' }} />
        </div>

      </div>
    </section>
  )
}
