"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Hero() {
  return (
    // h-[calc(100vh-88px)] ocupa toda la pantalla disponible bajo el navbar
    <section className="relative h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden">
      
      {/* Fondo con imagen y gradiente de cobertura */}
      <div className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-legal-black" />

      {/* Contenido */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h2 className="text-legal-gold uppercase tracking-[0.2em] mb-4 text-sm font-semibold">
          Estrategia Jurídica de Alto Nivel
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
          Defendemos su <span className="text-legal-gold">patrimonio</span> con precisión absoluta.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Soluciones corporativas diseñadas para proteger el futuro de su empresa y su legado personal.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/contacto" 
            className="bg-legal-gold text-legal-black px-8 py-4 font-bold hover:bg-white transition-all duration-300"
          >
            CONSULTA PRIVADA
          </Link>
          <Link 
            href="/servicios" 
            className="border border-legal-gold text-white px-8 py-4 font-bold hover:bg-legal-gold/10 transition-all duration-300"
          >
            NUESTROS SERVICIOS
          </Link>
        </div>
      </motion.div>
    </section>
  );
}