"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function DetalleServicio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const title = slug.replace(/-/g, ' ');

  return (
    <main className="bg-white min-h-screen text-black">
      {/* Hero Header */}
      <section className="bg-black text-white py-24 px-12 md:px-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <h1 className="text-7xl font-serif capitalize mb-8">{title}</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Soluciones jurídicas estratégicas diseñadas para la protección de su patrimonio y la continuidad de sus operaciones.
          </p>
        </motion.div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 px-12 md:px-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          {/* Bloques de Información */}
          <div>
            <h3 className="text-legal-gold font-bold uppercase tracking-widest text-sm mb-4">Análisis del área</h3>
            <p className="text-lg leading-relaxed text-gray-800">
              El área de {title} es un pilar fundamental para la estabilidad. En nuestra firma, no solo resolvemos conflictos, 
              nos anticipamos a ellos mediante una metodología de prevención de riesgos corporativos y civiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 border-l-2 border-legal-gold">
              <h4 className="font-bold mb-2">Estrategia Preventiva</h4>
              <p className="text-sm text-gray-600">Reducción de contingencias mediante auditorías legales exhaustivas.</p>
            </div>
            <div className="bg-neutral-50 p-8 border-l-2 border-legal-gold">
              <h4 className="font-bold mb-2">Representación</h4>
              <p className="text-sm text-gray-600">Gestión de alto nivel ante instancias judiciales y administrativas.</p>
            </div>
          </div>
        </div>

        {/* Sidebar de Contacto Estratégico */}
        <div className="bg-black text-white p-10 h-fit space-y-8">
          <h3 className="text-legal-gold font-bold uppercase tracking-widest text-sm">¿Desea asesoría inicial?</h3>
          <p className="text-sm text-gray-400">Nuestro equipo está listo para analizar su situación de manera confidencial.</p>
          <Link href="/contacto" className="block w-full text-center py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-legal-gold transition-colors">
            Agendar Consultoría
          </Link>
          <p className="text-[10px] text-gray-500 uppercase text-center">Atención en menos de 24 horas</p>
        </div>
      </section>
    </main>
  );
}