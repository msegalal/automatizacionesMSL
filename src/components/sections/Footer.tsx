export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-[#efe6dc] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">automatizacionesMSL</p>
          <p className="mt-1 text-sm text-slate-600">
            Herramienta y automatizacion para agencias de viajes que quieren mas orden y menos
            trabajo manual.
          </p>
        </div>
        <a href="#contacto" className="text-sm font-semibold text-slate-950 transition-colors hover:text-orange-500">
          Pedir propuesta
        </a>
      </div>
    </footer>
  );
}
