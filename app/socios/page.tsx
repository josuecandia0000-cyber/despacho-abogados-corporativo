"use client";
import { motion } from "framer-motion";

const socios = [
  {
    nombre: "Lic. Josué Rosales",
    cargo: "CEO & Fundador",
    bio: "Estratega legal con más de 8 años de experiencia en derecho corporativo y gestión de riesgos empresariales.",
    especialidad: "Derecho Corporativo y Sucesiones"
  },
  {
    nombre: "Lic. Maria Candia",
    cargo: "Socio Principal",
    bio: "Especialista en litigio civil y mercantil, reconocida por su eficacia en la resolución de conflictos complejos.",
    especialidad: "Derecho Civil y Mercantil"
  }
];

export default function SociosPage() {
  return (
    <main className="bg-black min-h-screen py-24 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-serif mb-24">Nuestros Socios</h1>

        <div className="space-y-32">
          {socios.map((socio, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* Contenedor de "Foto" (puedes poner aquí tu img) */}
              <div className="aspect-[3/4] bg-neutral-900 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-white/20 font-serif">Foto Profesional</span>
              </div>

              {/* Contenido Editorial */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-serif">{socio.nombre}</h2>
                  <p className="text-legal-gold uppercase tracking-widest text-sm mt-2">{socio.cargo}</p>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">{socio.bio}</p>
                
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Especialidad</h4>
                  <p className="text-gray-500">{socio.especialidad}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}