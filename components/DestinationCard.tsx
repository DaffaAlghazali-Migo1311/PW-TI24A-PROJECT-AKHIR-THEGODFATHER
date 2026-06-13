import Link from "next/link";
import { MapPin, Star, Clock, Ticket, ArrowRight } from "lucide-react";
import { Destinasi } from "@/lib/data";
import { formatUlasan, kategoriWarna } from "@/lib/utils";

interface Props {
  destinasi: Destinasi;
}

const kategoriEmoji: Record<string, string> = {
  alam: "🌿",
  bahari: "🌊",
  budaya: "🏛️",
  petualangan: "⛰️",
  kuliner: "🍽️",
};

export default function DestinationCard({ destinasi }: Props) {
  const warna = kategoriWarna[destinasi.kategori] || kategoriWarna.alam;

  return (
    <Link href={`/destinasi/${destinasi.slug}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-white/8 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 bg-navy-800">
        {/* Gambar / Placeholder */}
        <div className={`h-44 relative overflow-hidden`}>
          {destinasi.gambar.startsWith("http") ? (
            <img
              src={destinasi.gambar}
              alt={destinasi.nama}
              className="w-full h-full object-cover object-[center_70%] group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${warna} flex items-center justify-center`}
            >
              <span className="text-6xl opacity-40">
                {kategoriEmoji[destinasi.kategori]}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Tag kategori */}
          <span className="absolute bottom-3 left-3 text-[10px] bg-black/50 border border-white/15 rounded-full px-3 py-1 text-[#f0ede4]/80 uppercase tracking-wide">
            {destinasi.kategori}
          </span>

          {/* Rating badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1">
            <Star size={11} className="text-gold-500 fill-gold-500" />
            <span className="text-[11px] font-medium text-[#f0ede4]">
              {destinasi.rating}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <h3 className="font-display text-base font-bold text-[#f0ede4] mb-1 group-hover:text-gold-400 transition-colors line-clamp-1">
            {destinasi.nama}
          </h3>

          <div className="flex items-center gap-1.5 mb-2">
            <MapPin size={12} className="text-gold-500 flex-shrink-0" />
            <span className="text-xs text-[#f0ede4]/50">
              {destinasi.lokasi}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              <Clock size={11} className="text-[#f0ede4]/30" />
              <span className="text-[11px] text-[#f0ede4]/40">
                {destinasi.jamBuka.split("–")[0].trim()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Ticket size={11} className="text-gold-500/60" />
              <span className="text-[11px] text-gold-500/80">
                {destinasi.hargaMasuk}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#f0ede4]/45 leading-relaxed line-clamp-2 mb-3">
            {destinasi.deskripsi}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-[#f0ede4]/35">
              {formatUlasan(destinasi.ulasan)} ulasan
            </span>
            <span className="flex items-center gap-1 text-xs text-gold-500 font-medium group-hover:gap-2 transition-all">
              Lihat Detail <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
