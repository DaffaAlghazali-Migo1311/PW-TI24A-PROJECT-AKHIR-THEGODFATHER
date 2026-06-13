Bandar Lampung, 13 Juni 2026
Bpk Fenrico
Dosen Pengampu

Dengan hormat,

Saya mengucapkan permohonan maaf yang sebesar-besarnya atas hilangnya history commit pada repository GitHub project akhir kelompok kami "Explore Lampung".

Kejadian ini terjadi akibat kesalahan penggunaan perintah `git push --force` yang tidak sengaja menimpa seluruh history commit yang sebelumnya telah ada. Kami menyadari bahwa hal ini merupakan kelalaian kami dalam mengelola version control project.

Sebagai bukti bahwa commit tersebut pernah ada, berikut kami lampirkan log commit sebelumnya:

```
45a8f61  Fix tsconfig baseUrl untuk alias @/*
79b9d79  Hapus File Yang Tidak Digunakan
c0dfbce  Update blog, kuliner, dan gambar destinasi (Final Banget)
233a225  Update blog, kuliner, dan gambar destinasi (Final)
381ff84  Update blog, kuliner, dan gambar destinasi Part 4
cec4028  Update blog, kuliner, dan gambar destinasi Part 3
cd4d875  Update blog, kuliner, dan gambar destinasi Part 2
9e5f52d  Update blog, kuliner, dan gambar destinasi Part 1
b8793e0  Update blog, kuliner, dan gambar destinasi
46c5f5e  Menambahkan Blog di menu bar blog
2f2bc45  Membenarkan Codingan dan Menghapus 1 menu karena Duplikat
783375a  Menambahkan Domain Gambar
4e28686  Menambahkan Menu Tempoyak ke kuliner
ff93775  Menambahkan Gambar Lengkap dan Domain(Revisi Codingan Sebelumnya)
6ebe480  Menambahkan gambar pempek dan membenerkan codingan yang salah
d7cc17c  Menambahkan Data kuliner ke menu filter
1326bec  Menambahkan Gambar Kopi Robusta Lampung
58187ac  Menambahkan Gambar Lapis Legit Lampung
390f0da  Menambahkan Domain Gambar
d1fdfd8  Menambahkan Domain Gambar
0e663e9  Menambahkan Gambar Gulai Taboh & Seruit
9b71ee3  Mengganti Gambar Teluk Kiluan
a7c0068  Menambahkan Gambar Taman Budaya Lampung
b623150  Menambahkan Domain Gambar : TribunNews
e7098bf  Mengganti Gambar Gunung Anak Krakatau
c812a51  Menambahkan Domain Gambar
8eb6082  Mengubah Gambar Destinasi Pulau Pahawang
2efbf91  Mengganti Gambar Taman Nasional Way Kambas
8dd4b68  Menghapus File Double
119b885  MASTER: Update tampilan Page'
32d9d63  MASTER: Update tampilan dengan icon baru
a26f188  MASTER: Update tampilan Searchbar
ba0831a  MASTER: Update tampilan dengan icon baru
b643bb2  Hapus file
6aa101a  Merge branch 'master'
e42c5da  init: first time
fdaf9c3  MASTER: Upload project awal Explore Lampung
```

Kami telah berupaya memulihkan history commit tersebut namun tidak berhasil karena sudah tertimpa secara permanen. Kami berjanji untuk lebih berhati-hati dalam penggunaan Git di kemudian hari.

Demikian permohonan maaf ini kami sampaikan. Atas perhatian dan pengertian Bapak, kami ucapkan terima kasih.

Hormat Kami
Kelompok THEGODFATHER

**Kelompok The Godfather**

# Explore Lampung — Portal Wisata Digital Terpadu

Portal wisata digital berbasis Next.js 15 untuk menjelajahi keindahan Provinsi Lampung.

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

## 📁 Struktur Project

```
explore-lampung/
├── app/
│   ├── layout.tsx              ← Root layout (font, metadata)
│   ├── page.tsx                ← Landing page utama
│   ├── globals.css             ← Global styles + Tailwind
│   └── destinasi/
│       ├── page.tsx            ← Daftar semua destinasi
│       └── [slug]/page.tsx     ← Detail destinasi
├── components/
│   ├── Navbar.tsx              ← Navigasi utama (responsive)
│   ├── HeroSection.tsx         ← Hero dengan animasi
│   ├── SearchBar.tsx           ← Search dengan redirect
│   ├── FeaturedSection.tsx     ← Destinasi unggulan + filter
│   ├── DestinationCard.tsx     ← Kartu destinasi
│   ├── CategoryFilter.tsx      ← Filter kategori
│   ├── StatsSection.tsx        ← Statistik portal
│   └── Footer.tsx              ← Footer lengkap
├── lib/
│   ├── data.ts                 ← Data destinasi & kuliner
│   └── utils.ts                ← Helper functions
└── public/images/              ← Gambar destinasi
```

## 🎨 Tema & Desain

- **Warna utama**: Navy dark (#0a1628) + Gold (#c9a84c) + Forest green
- **Font**: Playfair Display (heading) + DM Sans (body)
- **Animasi**: Framer Motion untuk fade-in dan transisi halus

## 📦 Dependencies Utama

| Package       | Kegunaan                |
| ------------- | ----------------------- |
| next 15       | Framework utama         |
| framer-motion | Animasi halus           |
| lucide-react  | Icon set                |
| tailwindcss   | Styling utility         |
| clsx          | Conditional class names |

## 🗺️ Halaman yang Tersedia

- `/` — Landing page
- `/destinasi` — Daftar destinasi + filter + search
- `/destinasi/[slug]` — Detail setiap destinasi
- `/kuliner` _(coming soon)_
- `/budaya` _(coming soon)_
- `/peta` _(coming soon)_

## 🔧 Pengembangan Selanjutnya

1. Integrasi CMS (Sanity.io / Contentful)
2. Peta interaktif dengan Leaflet.js
3. Sistem ulasan pengguna
4. Halaman kuliner & budaya
5. Itinerary builder
6. Authentication & user profile
