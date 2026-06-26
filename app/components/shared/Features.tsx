"use client";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, UserCheck } from "lucide-react";

const features = [
  { icon: Scale, title: "Experiencia Senior", desc: "Décadas de trayectoria resolviendo conflictos complejos con eficacia." },
  { icon: ShieldCheck, title: "Precisión Legal", desc: "Análisis exhaustivo de cada caso bajo los más estrictos estándares." },
  { icon: UserCheck, title: "Atención Privada", desc: "Comunicación directa, reservada y enfocada en sus objetivos personales." }
];

// Contenedor para animar la entrada en secuencia
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Features() {
  return (
    <section className="py-24 px-12 bg-black border-y border-legal-gold/10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-legal-gold text-center mb-16 text-xs uppercase tracking-[0.4em]">Valores de la Firma</h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="relative p-12 border-r border-b border-legal-gold/10 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-500 group overflow-hidden"
            >
              {/* Brillo sutil al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-legal-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <f.icon className="w-12 h-12 text-legal-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-white text-2xl font-serif mb-4 relative z-10">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}