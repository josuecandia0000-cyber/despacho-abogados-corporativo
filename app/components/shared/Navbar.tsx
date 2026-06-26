"use client"; // Necesario porque usaremos animaciones
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center py-6 px-12 bg-legal-black border-b border-legal-gold/20"
    >
      <div className="text-legal-gold font-serif text-3xl font-bold tracking-tighter">
        <Link href="/">GJ</Link>
      </div>

      <div className="flex items-center gap-10 text-white font-sans text-sm tracking-widest uppercase">
        <Link href="/" className="hover:text-legal-gold transition-colors duration-300">Inicio</Link>
        <Link href="/socios" className="hover:text-legal-gold transition-colors duration-300">Socios</Link>
        <Link href="/servicios" className="hover:text-legal-gold transition-colors duration-300">Servicios</Link>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="/contacto" 
            className="bg-legal-gold text-legal-black px-6 py-3 font-bold uppercase hover:bg-transparent hover:text-legal-gold border border-legal-gold transition-all duration-300"
          >
            Asesoría Inmediata
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}