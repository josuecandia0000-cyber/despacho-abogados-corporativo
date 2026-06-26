"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-12 bg-black border-t border-legal-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Columna Izquierda: Información y Confianza */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-legal-gold text-xs uppercase tracking-[0.4em]">Asesoría Legal</h3>
            <h2 className="text-5xl font-serif text-white">¿Cómo podemos proteger sus intereses hoy?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              La estrategia jurídica correcta comienza con una consulta oportuna. Nuestro equipo está listo para asistirle en Santiago de Querétaro.
            </p>
          </div>

          {/* Tarjeta de urgencias - Elemento premium */}
          <div className="bg-gradient-to-r from-legal-gold/10 to-transparent p-6 border-l-2 border-legal-gold flex gap-4">
            <AlertCircle className="text-legal-gold w-12 h-12 shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-1">¿Necesita asistencia urgente?</h4>
              <p className="text-gray-400 text-sm">Nuestro equipo de guardia está disponible las 24 horas para casos que requieren atención inmediata.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white font-semibold">
                <MapPin className="text-legal-gold w-5 h-5" /> Ubicación
              </div>
              <p className="text-gray-500 text-sm">Av. Constituyentes, Querétaro, México.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white font-semibold">
                <Clock className="text-legal-gold w-5 h-5" /> Horario
              </div>
              <p className="text-gray-500 text-sm">Lunes a Viernes: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Autoridad */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900/50 p-10 border border-white/5 shadow-2xl relative"
        >
          <form className="space-y-8">
            <div className="space-y-4">
              <label className="text-legal-gold text-[10px] uppercase tracking-widest font-bold">Datos Personales</label>
              <input type="text" placeholder="Nombre completo" className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-legal-gold outline-none transition-all text-white placeholder-gray-600" />
            </div>
            <div className="space-y-4">
              <label className="text-legal-gold text-[10px] uppercase tracking-widest font-bold">Información de Contacto</label>
              <input type="email" placeholder="Correo electrónico" className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-legal-gold outline-none transition-all text-white placeholder-gray-600" />
            </div>
            <div className="space-y-4">
              <label className="text-legal-gold text-[10px] uppercase tracking-widest font-bold">Detalles del Caso</label>
              <textarea placeholder="Cuéntenos brevemente su situación..." rows={4} className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-legal-gold outline-none transition-all text-white placeholder-gray-600 resize-none" />
            </div>
            
            <button className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest hover:bg-legal-gold transition-colors duration-500 group flex items-center justify-center gap-2">
              Enviar Solicitud
            </button>
            <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">Su información es tratada con total confidencialidad.</p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}