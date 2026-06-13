"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { kulinerData } from "@/lib/data";
import { MapPin, Star } from "lucide-react";

export default function KulinerPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 px-6 bg-gradient-to-b from-[#2e1a0d] to-navy-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold-500 mb-2">
            Cita Rasa
          </p>
          <h1 className="font-display text-4xl font-black mb-3">
            Kuliner Lampung
          </h1>
          <p className="text-[#f0ede4]/50 text-sm max-w-xl">
            Nikmati kekayaan cita rasa autentik Lampung — dari seruit yang gurih
            hingga pempek khas pesisir yang legendaris.
          </p>
        </div>
      </div>

      {/* Grid Kuliner */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kulinerData.map((item) => (
              <div
                key={item.id}
                className="bg-navy-800 border border-white/8 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gambar */}
                <div className="h-48 relative bg-gradient-to-br from-[#3d2a0d] to-[#1e1204]">
                  {item.gambar ? (
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-5xl">🍽️</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#f0ede4] mb-1">
                    {item.nama}
                  </h3>

                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={12} className="text-gold-500" />
                    <span className="text-xs text-[#f0ede4]/50">
                      {item.lokasi}
                    </span>
                  </div>

                  <p className="text-sm text-[#f0ede4]/50 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={13} className="text-gold-500 fill-gold-500" />
                      <span className="text-sm font-medium text-[#f0ede4]">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gold-500 font-medium">
                      {item.harga}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
