# DevStudio — Website Jasa Pembuatan Website

Website profesional untuk jasa pembuatan website & aplikasi custom. Dibangun dengan **Next.js 14** + **Tailwind CSS**, siap deploy ke Vercel.

## Fitur
- Hero section dengan animasi
- Halaman layanan lengkap (Website, Sistem Informasi, Mobile App)
- Paket harga transparan (Starter / Business / Custom)
- Portofolio / galeri proyek
- Testimoni klien
- Form kontak terintegrasi WhatsApp
- Tombol WA floating di semua halaman
- Fully responsive (mobile-friendly)
- SEO-ready dengan metadata

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Google Fonts (Plus Jakarta Sans + DM Sans)

---

## Deploy ke Vercel (Cara Mudah)

### Option 1 — Upload langsung ke Vercel (Tanpa Git)
1. Buka [vercel.com](https://vercel.com) → Login / Daftar
2. Klik **"Add New Project"** → **"Deploy without Git"**
3. Upload folder `webdev-studio` ini (drag & drop atau zip)
4. Klik **Deploy** — selesai!

### Option 2 — Via GitHub (Rekomendasi)
1. Buat repo baru di GitHub
2. Upload semua file ini ke repo tersebut
3. Buka [vercel.com](https://vercel.com) → **"Add New Project"**
4. Pilih repo dari GitHub → klik **Deploy**
5. Vercel otomatis detect Next.js — tidak perlu setting apapun

### Option 3 — Via Vercel CLI
```bash
npm install -g vercel
cd webdev-studio
npm install
vercel deploy
```

---

## Development Lokal
```bash
cd webdev-studio
npm install
npm run dev
# Buka http://localhost:3000
```

---

## Kustomisasi

### Ganti Nomor WhatsApp
Cari & ganti `6281376524303` di semua file dengan nomor Anda.

### Ganti Nama Brand
Cari `DevStudio` dan ganti dengan nama bisnis Anda.

### Ganti Warna Utama
Di `tailwind.config.js`, ubah warna `brand.500` / `brand.600`:
```js
brand: {
  500: '#4f6ef7',  // ganti ini
  600: '#3a56e8',  // dan ini
}
```

### Tambah Portofolio
Edit array `projects` di `components/Portfolio.js`.

### Edit Testimoni
Edit array `testimonials` di `components/Testimonials.js`.

---

## Struktur File
```
webdev-studio/
├── app/
│   ├── globals.css      # Style global & animasi
│   ├── layout.js        # Root layout + metadata SEO
│   └── page.js          # Halaman utama
├── components/
│   ├── Navbar.js        # Navigasi (sticky + mobile menu)
│   ├── Hero.js          # Hero section
│   ├── Services.js      # Layanan kami
│   ├── Pricing.js       # Paket harga
│   ├── Portfolio.js     # Portofolio proyek
│   ├── Testimonials.js  # Testimoni klien
│   ├── Contact.js       # Form kontak + info
│   ├── Footer.js        # Footer
│   └── WAFloat.js       # Tombol WA floating
├── package.json
├── tailwind.config.js
├── next.config.js
└── vercel.json
```
