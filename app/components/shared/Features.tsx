// components/shared/Features.tsx
"use client";
import { motion } from "framer-motion";
import { Scale, ShieldCheck, UserCheck } from "lucide-react"; // Iconos profesionales

const features = [
  { icon: Scale, title: "Experiencia Senior", desc: "Décadas de trayectoria resolviendo conflictos complejos con eficacia." },
  { icon: ShieldCheck, title: "Precisión Legal", desc: "Análisis exhaustivo de cada caso bajo los más estrictos estándares." },
  { icon: UserCheck, title: "Atención Privada", desc: "Comunicación directa, reservada y enfocada en sus objetivos personales." }
];

export default function Features() {
  return (
    <section className="py-24 px-12 bg-black border-b border-legal-gold/10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-legal-gold text-center mb-16 text-xs uppercase tracking-[0.4em]">Valores de la Firma</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, borderColor: "#C5A059" }}
              className="p-10 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-500 group"
            >
              <f.icon className="w-10 h-10 text-legal-gold mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white text-xl font-serif mb-4">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}