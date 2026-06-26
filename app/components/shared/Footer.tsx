// components/shared/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-legal-gold/20 pt-16 pb-8 px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        
        {/* Columna 1: Identidad */}
        <div className="space-y-4">
          <h3 className="text-legal-gold font-serif text-2xl font-bold">GJ</h3>
          <p className="text-gray-400 text-sm">
            Excelencia legal y compromiso corporativo en el corazón de Querétaro.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="space-y-4">
          <h4 className="text-legal-gold font-bold uppercase tracking-widest text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/politica-privacidad" className="hover:text-legal-gold">Política de Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:text-legal-gold">Términos Legales</Link></li>
            <li><Link href="/mapa-sitio" className="hover:text-legal-gold">Mapa del Sitio</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto profesional */}
        <div className="space-y-4 text-sm text-gray-400">
          <h4 className="text-legal-gold font-bold uppercase tracking-widest text-sm">Contacto</h4>
          <p>Santiago de Querétaro, México</p>
          <p>Email: contacto@ejemplo.com</p>
          <p>Tel: +52 (442) XXX XXXX</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © 2026 DESPACHO JURÍDICO. Todos los derechos reservados. Desarrollado por JOZUL TECH.
      </div>
    </footer>
  );
}