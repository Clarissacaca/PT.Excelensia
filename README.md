# PT Excelenia — Company Profile Website

Website company profile untuk PT Excelenia. Dibangun dengan Vite + React (tanpa backend/database, murni static site).

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

Hasil build ada di folder `dist/`, tinggal di-deploy ke Vercel/Netlify/hosting static mana pun.

## Struktur

- `src/components` — TopBar (pencarian + sosmed), SiteHeader (logo + navigasi dropdown), Footer, Layout
- `src/pages` — Beranda, Tentang Kami (Sejarah, Visi Misi, Struktur Organisasi), Layanan (Jasa, Barang), Publikasi (Data Legal, Landasan Hukum), Galeri, Kontak

Semua konten masih dummy/placeholder — tinggal diganti sesuai data asli perusahaan.
