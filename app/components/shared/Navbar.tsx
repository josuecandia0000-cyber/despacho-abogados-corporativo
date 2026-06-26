"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-black py-6 px-6 flex items-center justify-between border-b border-white/10">
      <div className="text-legal-gold font-bold text-2xl">GJ</div>

      {/* Menú Escritorio */}
      <div className="hidden md:flex gap-8 text-white text-sm uppercase tracking-widest">
        <Link href="/" className="hover:text-legal-gold">Inicio</Link>
        <Link href="/socios" className="hover:text-legal-gold">Socios</Link>
        <Link href="/servicios" className="hover:text-legal-gold">Servicios</Link>
      </div>

      {/* Botón hamburguesa móvil */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menú Móvil desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-legal-gold p-6 flex flex-col gap-4 text-center"
          >
            <Link href="/" className="text-white" onClick={() => setIsOpen(false)}>Inicio</Link>
            <Link href="/socios" className="text-white" onClick={() => setIsOpen(false)}>Socios</Link>
            <Link href="/servicios" className="text-white" onClick={() => setIsOpen(false)}>Servicios</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}