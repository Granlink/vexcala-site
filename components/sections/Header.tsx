export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white">
          VEXCALA<span className="text-blue-500">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Inicio</a>
          <a href="#process" className="hover:text-white transition-colors">Nuestro Sistema</a>
          <a href="#value" className="hover:text-white transition-colors">Beneficios</a>
        </nav>

        <a 
          href="#apply" 
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all"
        >
          Agendar Sesión
        </a>
      </div>
    </header>
  );
}