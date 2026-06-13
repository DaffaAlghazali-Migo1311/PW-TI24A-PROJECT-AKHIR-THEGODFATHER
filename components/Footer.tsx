import Link from "next/link";
import {
  Compass,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-950 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-3">
              <Compass size={22} className="text-gold-500" />
              Explore<span className="text-gold-500">Lampung</span>
            </div>
            <p className="text-sm text-[#f0ede4]/45 leading-relaxed max-w-xs mb-4">
              Portal wisata digital terpadu untuk menjelajahi keindahan alam,
              budaya, dan kuliner Provinsi Lampung.
            </p>

            {/* Kontak */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-[#f0ede4]/40">
                <MapPin size={13} className="text-gold-500" />
                <span>Bandar Lampung, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f0ede4]/40">
                <Instagram size={13} className="text-gold-500" />
                <span>@infokyai</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f0ede4]/40">
                <Phone size={13} className="text-gold-500" />
                <span>+62 721 000 0000</span>
              </div>
            </div>

            {/* Sosmed */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/6 border border-white/10 rounded-lg flex items-center justify-center hover:border-gold-500/40 hover:text-gold-500 text-[#f0ede4]/40 transition-all"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>

            <p className="text-xs text-gold-500/60 mt-4 font-medium tracking-wide">
              Sai Bumi Ruwa Jurai
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f0ede4]/35 mb-4">
              Jelajahi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Destinasi", href: "/destinasi" },
                { label: "Kuliner", href: "/kuliner" },
                { label: "Budaya", href: "/budaya" },
                { label: "Peta Wisata", href: "/peta" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#f0ede4]/50 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f0ede4]/35 mb-4">
              Informasi
            </h4>
            <ul className="space-y-2.5">
              {[
                "Tentang Kami",
                "Kontak",
                "Kebijakan Privasi",
                "Syarat & Ketentuan",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#f0ede4]/50 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#f0ede4]/30">
            &copy; {new Date().getFullYear()} Explore Lampung. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-[#f0ede4]/25">
            Dibuat dengan{" "}
            <Heart size={12} className="text-red-400 fill-red-400" /> untuk
            Lampung
          </p>
        </div>
      </div>
    </footer>
  );
}
