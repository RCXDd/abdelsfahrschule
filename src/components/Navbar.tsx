"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Image
            src="/logo/logo-transparent.png"
            alt="Abdels Fahrschule"
            width={120}
            height={40}
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2 glass-premium p-1.5 rounded-full shadow-elevation-medium">
          <NavLink href="/#philosophie">Philosophie</NavLink>
          <NavLink href="/#ablauf">Ablauf</NavLink>
          <NavLink href="/#preise">Preise</NavLink>
          <Link
            href="/#kontakt"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-accent-brown transition-premium hover:shadow-glow hover:-translate-y-0.5 shine"
          >
            Starten
          </Link>
        </div>

        <button
          className="md:hidden text-primary p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-creme z-30 flex flex-col items-center justify-center gap-8 text-3xl font-display font-bold text-primary"
        >
          <Link onClick={() => setIsMenuOpen(false)} href="/#philosophie">
            Philosophie
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/#ablauf">
            Ablauf
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/#preise">
            Preise
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/#kontakt">
            Kontakt
          </Link>
        </motion.div>
      )}
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-5 py-2 font-bold text-primary hover:text-accent-brown transition-colors text-sm uppercase tracking-wide"
    >
      {children}
    </Link>
  );
}
