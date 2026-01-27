export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
      <div className="mb-4 text-white font-bold">VEXCALA</div>
      <p className="mb-6">© 2026 Departamento de Adquisición Digital. Todos los derechos reservados.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
      </div>
    </footer>
  );
}