export default function ValueProps() {
  const props = [
    { title: "Cualificación IA", desc: "Filtramos prospectos antes de que lleguen a tu agenda." },
    { title: "Sistemas Escalables", desc: "Infraestructura diseñada para soportar incrementos de pauta." },
    { title: "Reportes en Tiempo Real", desc: "Transparencia total sobre tu retorno de inversión (ROAS)." },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {props.map((p, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-3 text-white">{p.title}</h3>
            <p className="text-slate-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}