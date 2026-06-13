import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Budaya Lampung | The Godfather",
  description:
    "Jelajahi kekayaan budaya Lampung dari tarian tradisional hingga kerajinan tangan bersejarah.",
};

interface BudayaItem {
  nama: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
}

const budayaList: BudayaItem[] = [
  {
    nama: "Tari Sigeh Penguten",
    kategori: "Tari Tradisional",
    deskripsi:
      "Tarian penyambutan tamu agung khas Lampung yang dibawakan oleh gadis-gadis dengan kostum adat lengkap dan gerakan anggun penuh makna.",
gambar: "https://indonesiakaya.com/wp-content/uploads/2020/10/Tari_Sigeh_Pengunten_1200.jpg",
  },
  {
    nama: "Kain Tapis",
    kategori: "Kerajinan Tangan",
    deskripsi:
      "Kain tenun khas Lampung dengan benang emas dan perak bermotif flora-fauna. Karya seni warisan leluhur yang kini dikenal luas.",
    gambar:
       "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-keindahan-kain-tenun-tapis-dari-lampung-f148491cdcd9cf384312e7d1a32821b1.jpg?tr=w-730,h-486,fo-center",
  },
  {
    nama: "Sekura Cakak Buah",
    kategori: "Festival Adat",
    deskripsi:
      "Festival panjat pohon pinang dan pohon bambu yang diadakan setiap Lebaran di Lampung Barat.",
    gambar:
      "https://media.suara.com/pictures/653x366/2025/04/03/18472-pesta-sekura-cakak-buah.webp",
  },
  {
    nama: "Aksara Lampung",
    kategori: "Bahasa & Tulisan",
    deskripsi:
      "Huruf tradisional Lampung (Had Lampung) yang telah ada sejak abad ke-16.",
    gambar: "https://imgsrv2.paragram.id/cgWHV9bFSyoJBsPCVa3PTD0uImw=/smart/filters:strip_icc():quality(80):format(jpeg)/entries/2019-10/10/10729-1-5306e71ec97a9ac044207672dd637fe2.jpg",
  },
  {
    nama: "Rumah Adat Nuwo Sesat",
    kategori: "Arsitektur Adat",
    deskripsi: "Rumah adat Lampung berbentuk panggung dengan ornamen khas.",
    gambar:
      "https://cnc-magazine.oramiland.com/parenting/images/rumah_adat_lampung.width-800.format-webp.webp",
  },
  {
    nama: "Musik Cetik",
    kategori: "Seni Musik",
    deskripsi:
      "Alat musik tradisional Lampung berupa gambang kayu dengan nada pentatonis.",
    gambar: "https://indonesiakaya.com/wp-content/uploads/2020/10/Di_Liwa_Lampung_Barat_Gamolan_Pekhing_disebut_juga_Cetik_2.jpg",
  },
];

export default function BudayaPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 px-6 bg-gradient-to-b from-[#3d1a2e] to-navy-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">
            Warisan Leluhur
          </p>
          <h1 className="font-display text-4xl font-black mb-3">
            Budaya Lampung
          </h1>
          <p className="text-[#f0ede4]/50 text-sm max-w-xl leading-relaxed">
            Jelajahi kekayaan budaya Sai Bumi Ruwa Jurai — dari tarian sakral,
            kain tapis yang memukau, hingga tradisi adat yang masih terjaga
            hingga kini.
          </p>
        </div>
      </div>

      {/* Quote adat */}
      <div className="px-6 py-8 border-y border-white/8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-display text-xl text-gold-500 italic mb-2">
            "Sang Bumi Ruwa Jurai"
          </p>
          <p className="text-sm text-[#f0ede4]/40">
            Bumi yang didiami oleh dua kelompok masyarakat yang bersatu —
            filosofi keberagaman Lampung
          </p>
        </div>
      </div>

      {/* Grid Budaya */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {budayaList.map((item, i) => (
              <div
                key={`budaya-${i}`}
                className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Visual */}
                <div className="relative h-44 overflow-hidden bg-navy-900">
                  <Image
                    src={item.gambar}
                    alt={`${item.nama} - budaya Lampung`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-widest text-gold-500 bg-gold-500/10 border border-gold-500/20 rounded-full px-3 py-1 inline-block">
                    {item.kategori}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#f0ede4] mt-3 mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-sm text-[#f0ede4]/50 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner informasi */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-navy-800 to-[#0d2e1f] border border-gold-500/20 rounded-3xl p-8 text-center">
            <p className="text-xs tracking-widest uppercase text-gold-500 mb-3">
              Pelajari Lebih Dalam
            </p>
            <h2 className="font-display text-2xl font-bold mb-3">
              Museum Lampung
            </h2>
            <p className="text-[#f0ede4]/50 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Kunjungi Museum Negeri Provinsi Lampung "Ruwa Jurai" untuk melihat
              koleksi artefak, pakaian adat, dan sejarah lengkap kebudayaan
              Lampung.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#f0ede4]/60">
              <span>📍 Jl. ZA Pagar Alam, Bandar Lampung</span>
              <span>🕐 Selasa – Minggu, 08.00 – 16.00</span>
              <span>🎟️ Rp 5.000</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
