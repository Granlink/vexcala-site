export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
        Exclusivo para negocios que facturan +$X,XXX/mes
      </span>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
        Tu Departamento de Adquisición <br /> 
        <span className="text-blue-500">Digital de Clientes</span>
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
        No somos una agencia. Nos convertimos en tu brazo ejecutor para garantizar un flujo constante de clientes calificados mediante sistemas de ingeniería de ventas.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#apply" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105">
          Verificar Elegibilidad
        </a>
        <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all">
          Ver Casos de Éxito
        </button>
      </div>
    </section>
  );
}