const modules = [
  ['Comercial', 'Pedidos, clientes e acompanhamento de vendas.'],
  ['Estoque', 'Produtos, entradas, saídas e estoque mínimo.'],
  ['Financeiro', 'Contas a receber e fluxo de caixa.'],
  ['Logística', 'Separação, expedição e entrega.'],
];

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">ArrozERP</p>
      <div className="mt-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Gestão simples para quem vende arroz.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Um ERP construído por etapas para aprender frontend, backend, banco de dados e boas
          práticas de engenharia.
        </p>
      </div>
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Módulos">
        {modules.map(([title, description]) => (
          <article
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="font-semibold text-slate-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
