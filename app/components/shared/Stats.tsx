// components/shared/Stats.tsx
export default function Stats() {
  return (
    <section className="py-20 bg-legal-gold">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h4 className="text-4xl font-serif text-black font-bold">20+</h4>
          <p className="text-black/70 text-xs uppercase tracking-widest mt-2">Años de experiencia</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif text-black font-bold">500+</h4>
          <p className="text-black/70 text-xs uppercase tracking-widest mt-2">Casos resueltos</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif text-black font-bold">98%</h4>
          <p className="text-black/70 text-xs uppercase tracking-widest mt-2">Satisfacción de clientes</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif text-black font-bold">24/7</h4>
          <p className="text-black/70 text-xs uppercase tracking-widest mt-2">Disponibilidad</p>
        </div>
      </div>
    </section>
  );
}