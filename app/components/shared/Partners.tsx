"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const partners = [
  { 
    name: "Lic. Roberto Estrada", 
    role: "Socio Director", 
    specialty: "Derecho Corporativo y Fiscal",
    img: "/socio1.jpg" 
  },
  { 
    name: "Lic. Adriana Valdés", 
    role: "Socio Fundador", 
    specialty: "Litigio de Alto Impacto",
    img: "/socio2.jpg" 
  },
  { 
    name: "Lic. Carlos Guzmán", 
    role: "Socio Consultor", 
    specialty: "Propiedad Intelectual",
    img: "/socio3.jpg" 
  },
];

export default function Partners() {
  return (
    <section className="relative py-32 px-12 bg-legal-black overflow-hidden">
      {/* Texto de fondo decorativo (Watermark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[15vw] font-serif text-white/[0.02] leading-none uppercase">
          Excelencia
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-md">
            <h3 className="text-legal-gold text-xs uppercase tracking-[0.5em] mb-4">Liderazgo</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Nuestros Socios</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs border-l border-legal-gold/30 pl-6">
            Un equipo multidisciplinario dedicado a la protección de sus intereses más complejos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              {/* Contenedor de Imagen con Marco Dorado */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10 transition-all duration-500 group-hover:border-legal-gold/50">
                
                {/* Overlay de información que aparece en Hover */}
                <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="space-y-4"
                  >
                    <div className="w-10 h-[1px] bg-legal-gold" />
                    <p className="text-legal-gold text-xs uppercase tracking-widest font-bold">Especialidad</p>
                    <p className="text-white text-lg font-light leading-snug">{p.specialty}</p>
                    <button className="flex items-center gap-2 text-white text-xs hover:text-legal-gold transition-colors mt-4">
                      <Plus className="w-4 h-4" /> VER PERFIL COMPLETO
                    </button>
                  </motion.div>
                </div>

                {/* Placeholder de Foto / Imagen */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-serif italic text-sm group-hover:scale-110 transition-transform duration-700">
                   [FOTOGRAFÍA CORPORATIVA]
                </div>
              </div>

              {/* Información Inferior Estática */}
              <div className="mt-8 space-y-1">
                <h4 className="text-white text-2xl font-serif group-hover:text-legal-gold transition-colors">{p.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">{p.role}</p>
              </div>
            </motion.div> 
          ))}
        </div>
      </div>
    </section>
  );
}