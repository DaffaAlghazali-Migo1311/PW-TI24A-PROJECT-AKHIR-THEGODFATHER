"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Compass, Map, ChevronDown, Star, Users, TreePine } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-700 to-forest-800 z-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.3) 40px, rgba(201,168,76,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.3) 40px, rgba(201,168,76,0.3) 41px)",
        }} />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-forest-700/30 rounded-full blur-3xl z-0" />

      {/* Icon dekoratif */}
      <div className="absolute top-32 right-16 opacity-10 z-0">
        <TreePine size={120} className="text-gold-500" />
      </div>
      <div className="absolute bottom-32 left-8 opacity-10 z-0">
        <Compass size={80} className="text-gold-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/40 rounded-full px-4 py-1.5 mb-6"
        >
          <Star size={12} className="text-gold-500 fill-gold-500" />
          <span className="text-xs tracking-widest uppercase text-gold-500 font-medium">
            Portal Wisata Digital Terpadu
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6 max-w-3xl"
        >
          Jelajahi Keindahan{" "}
          <span className="text-gold-500">Tanah Lampung</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#f0ede4]/60 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          Dari hamparan Way Kambas hingga deburan ombak Pahawang — temukan
          destinasi terbaik, kuliner autentik, dan pengalaman budaya Lampung
          yang tak terlupakan.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-xl"
        >
          <SearchBar />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/destinasi"
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
          >
            <Compass size={16} />
            Jelajahi Sekarang
          </Link>
          <Link
            href="/peta"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50 text-[#f0ede4] font-medium px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
          >
            <Map size={16} />
            Lihat Peta Wisata
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-2 text-[#f0ede4]/30 text-xs"
        >
          <ChevronDown size={16} className="animate-bounce" />
          <span>Scroll untuk melihat lebih</span>
        </motion.div>
      </div>
    </section>
  );
}
