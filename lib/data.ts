// lib/data.ts — Data utama portal wisata Lampung

export type Kategori = "alam" | "bahari" | "budaya" | "kuliner" | "petualangan";

export interface Destinasi {
  id: string;
  slug: string;
  nama: string;
  lokasi: string;
  kabupaten: string;
  kategori: Kategori;
  deskripsi: string;
  rating: number;
  ulasan: number;
  hargaMasuk: string;
  jamBuka: string;
  koordinat: { lat: number; lng: number };
  gambar: string; // URL gambar
  highlights: string[];
  featured: boolean;
}

export interface Kuliner {
  id: string;
  nama: string;
  lokasi: string;
  deskripsi: string;
  rating: number;
  harga: string;
  gambar: string;
}

export const destinasiData: Destinasi[] = [
  {
    id: "1",
    slug: "way-kambas",
    nama: "Taman Nasional Way Kambas",
    lokasi: "Lampung Timur",
    kabupaten: "Lampung Timur",
    kategori: "alam",
    deskripsi:
      "Rumah bagi gajah Sumatera, badak, dan harimau. Salah satu taman nasional paling penting di Asia Tenggara dengan ekosistem hutan hujan tropis yang masih terjaga.",
    rating: 4.9,
    ulasan: 2100,
    hargaMasuk: "Rp 20.000",
    jamBuka: "07.00 – 17.00 WIB",
    koordinat: { lat: -4.9, lng: 105.7 },
    gambar:
      "https://ik.imagekit.io/tvlk/blog/2022/11/Taman-Nasional-Way-Kambas-Shutterstock.jpg",
    highlights: [
      "Elephant Conservation Center",
      "Safari gajah",
      "Bird watching",
      "River trekking",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "pulau-pahawang",
    nama: "Pulau Pahawang",
    lokasi: "Pesawaran",
    kabupaten: "Pesawaran",
    kategori: "bahari",
    deskripsi:
      "Surga snorkeling dengan terumbu karang berwarna-warni, ikan tropis, dan air laut yang jernih. Destinasi bahari terfavorit di Lampung.",
    rating: 4.8,
    ulasan: 1800,
    hargaMasuk: "Rp 50.000",
    jamBuka: "Sepanjang hari",
    koordinat: { lat: -5.5, lng: 105.2 },
    gambar:
      "https://cdn.bafageh.com/blogs/content/1679038037_pantai%20teluk%20kiluan.png",
    highlights: ["Snorkeling", "Diving", "Pantai pasir putih", "Sunset view"],
    featured: true,
  },
  {
    id: "3",
    slug: "pantai-mutun",
    nama: "Pantai Mutun",
    lokasi: "Pesawaran",
    kabupaten: "Pesawaran",
    kategori: "bahari",
    deskripsi:
      "Pantai dengan pasir putih halus dan pemandangan Teluk Lampung yang memukau. Cocok untuk keluarga dengan berbagai fasilitas lengkap.",
    rating: 4.5,
    ulasan: 980,
    hargaMasuk: "Rp 15.000",
    jamBuka: "06.00 – 18.00 WIB",
    koordinat: { lat: -5.56, lng: 105.2 },
    gambar: "https://jejakpiknik.com/wp-content/uploads/2017/05/ff-1.jpg",
    highlights: ["Banana boat", "Jetski", "Warung seafood", "Area camping"],
    featured: true,
  },
  {
    id: "4",
    slug: "gunung-krakatau",
    nama: "Gunung Anak Krakatau",
    lokasi: "Selat Sunda",
    kabupaten: "Lampung Selatan",
    kategori: "petualangan",
    deskripsi:
      "Gunung berapi aktif yang legendaris di tengah Selat Sunda. Pengalaman mendaki dan menyaksikan aktivitas vulkanik yang tak tertandingi.",
    rating: 4.7,
    ulasan: 1200,
    hargaMasuk: "Rp 150.000",
    jamBuka: "Tergantung kondisi",
    koordinat: { lat: -6.1, lng: 105.4 },
    gambar:
      "https://www.tournesia.com/blog/wp-content/uploads/2025/06/Gunung-Anak-Krakatau-Pesona-Gunung-Api-di-Tengah-Laut.jpg",
    highlights: ["Pendakian", "Lava tour", "Dolphin watching", "Snorkeling"],
    featured: true,
  },
  {
    id: "5",
    slug: "taman-budaya-lampung",
    nama: "Taman Budaya Lampung",
    lokasi: "Bandar Lampung",
    kabupaten: "Bandar Lampung",
    kategori: "budaya",
    deskripsi:
      "Pusat seni dan budaya Lampung yang menampilkan pertunjukan tari, musik tradisional, dan pameran kerajinan tangan khas daerah.",
    rating: 4.4,
    ulasan: 750,
    hargaMasuk: "Gratis",
    jamBuka: "08.00 – 16.00 WIB",
    koordinat: { lat: -5.42, lng: 105.26 },
    gambar:
      "https://asset.tribunnews.com/4bmA3UGN1Y5_y1yDxyHVosq0KgE=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/lampung/foto/bank/originals/taman-budaya-lampung_20170612_160350.jpg",
    highlights: [
      "Tari Sigeh Penguten",
      "Kerajinan tapis",
      "Pameran budaya",
      "Pertunjukan seni",
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "teluk-kiluan",
    nama: "Teluk Kiluan",
    lokasi: "Tanggamus",
    kabupaten: "Tanggamus",
    kategori: "bahari",
    deskripsi:
      "Surga tersembunyi dengan lumba-lumba liar yang bisa dijumpai setiap pagi. Salah satu spot dolphin watching terbaik di Indonesia.",
    rating: 4.8,
    ulasan: 1400,
    hargaMasuk: "Rp 25.000",
    jamBuka: "05.00 – 17.00 WIB",
    koordinat: { lat: -5.7, lng: 104.8 },
    gambar:
      "https://cdn.bafageh.com/blogs/content/1679038037_pantai%20teluk%20kiluan.png",
    highlights: [
      "Dolphin watching",
      "Snorkeling",
      "Penangkaran penyu",
      "Sunset",
    ],
    featured: false,
  },
];

export const kulinerData: Kuliner[] = [
  {
    id: "1",
    nama: "Pempek Lampung",
    lokasi: "Bandar Lampung",
    deskripsi:
      "Pempek khas Lampung dengan ikan tenggiri segar dan cuko pedas manis.",
    rating: 4.8,
    harga: "Rp 15.000 – 50.000",
    gambar:
      "https://www.indonesia.travel/contentassets/5dbb465d5bb34039ad37dda195a290ec/3-restaurants-serving-legendary-pempek-in-lampung.jpg",
  },
  {
    id: "2",
    nama: "Seruit",
    lokasi: "Seluruh Lampung",
    deskripsi:
      "Masakan tradisional Lampung berupa campuran ikan bakar, terasi, dan sambal.",
    rating: 4.7,
    harga: "Rp 25.000 – 60.000",
    gambar:
      "https://osccdn.medcom.id/images/content/2021/05/28/864df87e0fcae3170a241d6d114c1df4.jpg",
  },
  {
    id: "3",
    nama: "Tempoyak",
    lokasi: "Seluruh Lampung",
    deskripsi:
      "Olahan durian fermentasi khas Lampung yang biasa disajikan sebagai sambal atau campuran masakan ikan.",
    rating: 4.5,
    harga: "Rp 10.000 – 30.000",
    gambar:
      "https://cdn0-production-images-kly.akamaized.net/QQyiOzO9V0ResCc_0rvBsQmCsHc=/0x155:2167x1376/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2760597/original/018876300_1553504026-Sambal_Tempoyak-_Sumber_foto-_vidiocom_.jpg",
  },
  {
    id: "4",
    nama: "Gulai Taboh",
    lokasi: "Lampung Barat",
    deskripsi:
      "Gulai kacang-kacangan dengan santan kental dan rempah khas Lampung Barat.",
    rating: 4.6,
    harga: "Rp 20.000 – 35.000",
    gambar:
      "https://upload.wikimedia.org/wikipedia/id/c/c0/Gulai_Taboh_Lampung.jpg",
  },
];

export const kategoriList = [
  { value: "semua", label: "Semua" },
  { value: "alam", label: "Alam" },
  { value: "bahari", label: "Bahari" },
  { value: "budaya", label: "Budaya" },
  { value: "kuliner", label: "Kuliner" },
  { value: "petualangan", label: "Petualangan" },
] as const;

export const statsData = [
  { angka: "240+", label: "Destinasi Wisata" },
  { angka: "18", label: "Kabupaten/Kota" },
  { angka: "50K+", label: "Wisatawan/Bulan" },
];
