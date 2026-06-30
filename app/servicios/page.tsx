"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const services = [
  { title: "Derecho Civil y Mercantil", img: "/service-1.jpg", slug: "civil" },
  { title: "Derecho Laboral", img: "/service-2.jpg", slug: "laboral" },
  { title: "Derecho Corporativo", img: "/service-3.jpg", slug: "corporativo" },
  { title: "Derecho Penal", img: "/service-4.jpg", slug: "penal" },
];

export default function ServiciosPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <main className="bg-black min-h-screen flex items-center justify-center p-12 relative overflow-hidden">
      
      {/* Imagen dinámica de fondo que cambia según el hover */}
      <AnimatePresence>
        {hoveredService && (
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            src={services.find(s => s.title === hoveredService)?.img}
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          />
        )}
      </AnimatePresence>

      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-white text-sm uppercase tracking-[0.5em] mb-16 text-center">Nuestra Experiencia</h1>
        
        {services.map((s, i) => (
          <Link href={`/servicios/${s.slug}`} key={i}>
            <motion.div 
              onMouseEnter={() => setHoveredService(s.title)}
              onMouseLeave={() => setHoveredService(null)}
              className="flex items-center justify-between py-10 border-b border-white/10 group cursor-pointer"
            >
              <span className="text-white/30 font-mono text-xl">0{i + 1}</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white group-hover:text-legal-gold transition-colors duration-300">
                {s.title}
              </h2>
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}