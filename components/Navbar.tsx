"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass, MapPin, UtensilsCrossed, Landmark, Map, BookOpen } from "lucide-react";

const navLinks = [
  { href: "/destinasi", label: "Destinasi", icon: MapPin },
  { href: "/kuliner", label: "Kuliner", icon: UtensilsCrossed },
  { href: "/budaya", label: "Budaya", icon: Landmark },
  { href: "/peta", label: "Peta", icon: Map },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-navy-900/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-[#f0ede4]">
          <Compass size={22} className="text-gold-500" />
          Explore<span className="text-gold-500">Lampung</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm text-[#f0ede4]/55 hover:text-gold-500 transition-colors duration-200"
            >
              <link.icon size={14} />
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/destinasi"
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
          >
            <Compass size={15} />
            Mulai Jelajah
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f0ede4]/70 hover:text-[#f0ede4]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm text-[#f0ede4]/70 hover:text-gold-500 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              <link.icon size={15} />
              {link.label}
            </Link>
          ))}
          <Link
            href="/destinasi"
            className="mt-2 flex items-center justify-center gap-2 bg-gold-500 text-navy-900 text-sm font-medium px-5 py-2.5 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            <Compass size={15} />
            Mulai Jelajah
          </Link>
        </div>
      )}
    </nav>
  );
}
