"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Derecho Corporativo", desc: "Constitución y gestión de sociedades.", img: "/service-1.jpg" },
  { title: "Laboral", desc: "Defensa estratégica de los intereses de la empresa.", img: "/service-2.jpg" },
  { title: "Civil y Mercantil", desc: "Resolución de controversias y protección patrimonial.", img: "/service-3.jpg" },
  { title: "Derecho Familiar", desc: "Asesoría discreta y profesional.", img: "/service-4.jpg" }
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-legal-gold text-center mb-16 text-xs uppercase tracking-[0.4em]">Especialidades</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              {/* AQUÍ ESTABA EL ERROR: Faltaba la etiqueta img */}
              <img 
                src={s.img} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" 
              />
              
              {/* Degradado para que el texto resalte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Contenido */}
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="text-white text-xl md:text-2xl font-serif mb-1">{s.title}</h4>
                <p className="text-legal-gold text-[10px] md:text-xs uppercase tracking-widest opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}