import './globals.css'

export const metadata = {
  title: 'DevStudio — Jasa Pembuatan Website & Aplikasi Custom',
  description: 'Kami membangun website profesional dan aplikasi custom untuk bisnis Anda. Mulai dari Rp 200.000. Web Company Profile, Landing Page, Sistem Informasi, dan banyak lagi.',
  keywords: 'jasa website, pembuatan website, aplikasi custom, web company profile, sistem informasi, landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
