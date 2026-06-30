"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ShieldCheck, Clock3 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen py-24 px-6 md:px-12 relative">
      {/* Textura de fondo sutil para dar profundidad */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* Columna Izquierda: Información y Confianza */}
        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-serif text-white mb-6">Hablemos sobre su caso.</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Estamos en el corazón de Santiago de Querétaro. Nuestra firma prioriza la discreción absoluta y la estrategia legal de alto nivel.
            </p>
          </motion.div>

          <div className="space-y-8">
            <ContactInfo icon={<MapPin />} title="Dirección" text="Av. Constituyentes, Querétaro, México." />
            <ContactInfo icon={<Phone />} title="Teléfono" text="+52 (442) XXX XXXX" />
            <ContactInfo icon={<Mail />} title="Correo" text="contacto@jozultech.com" />
            <ContactInfo icon={<Clock />} title="Horario" text="Lunes a Viernes: 09:00 - 18:00" />
          </div>

          {/* Mapa con estilo oscuro */}
          <div className="h-64 bg-neutral-900 border border-white/10 flex items-center justify-center text-gray-700 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://snazzymaps.com/assets/images/snazzy-maps-logo.png')] opacity-20"></div>
             <p className="font-serif">Mapa interactivo de Querétaro</p>
          </div>
        </div>

        {/* Columna Derecha: Formulario Premium */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-12">
          <form className="bg-neutral-900/30 p-10 border border-white/10 shadow-2xl">
            <h3 className="text-legal-gold text-xs uppercase tracking-[0.3em] mb-8 font-bold">Solicitud de Consulta</h3>
            <div className="space-y-8">
              <InputField label="Nombre Completo" type="text" />
              <InputField label="Correo Electrónico" type="email" />
              <div className="space-y-2">
                <label className="text-legal-gold text-[10px] uppercase tracking-widest font-bold">Tipo de Servicio</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-legal-gold transition-colors">
                  <option className="bg-black">Derecho Corporativo</option>
                  <option className="bg-black">Derecho Civil y Mercantil</option>
                  <option className="bg-black">Derecho Laboral</option>
                </select>
              </div>
              <InputField label="Detalles del Caso" type="textarea" />
              <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-legal-gold transition-all duration-300">
                Enviar Solicitud
              </button>
            </div>
          </form>

          {/* Sección de FAQ integrada */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div className="flex gap-3">
              <ShieldCheck className="text-legal-gold w-6 h-6" />
              <div>
                <h4 className="text-white text-xs font-bold uppercase">Confidencialidad</h4>
                <p className="text-gray-500 text-[10px]">Protección total bajo secreto profesional.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock3 className="text-legal-gold w-6 h-6" />
              <div>
                <h4 className="text-white text-xs font-bold uppercase">Respuesta Rápida</h4>
                <p className="text-gray-500 text-[10px]">Atención en menos de 24 horas hábiles.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ContactInfo({ icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-legal-gold">{icon}</div>
      <div>
        <h4 className="text-white font-bold text-sm tracking-wide">{title}</h4>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}

function InputField({ label, type }: { label: string, type: string }) {
  return (
    <div className="space-y-2">
      <label className="text-legal-gold text-[10px] uppercase tracking-widest font-bold">{label}</label>
      {type === "textarea" ? (
        <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-legal-gold transition-colors" />
      ) : (
        <input type={type} className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-legal-gold transition-colors" />
      )}
    </div>
  );
}