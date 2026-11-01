import { AppShell, PageHeading, PrimaryButton } from '../components/AppShell';

const orders = [
  ['#10482', 'Mercado São João', 'Hoje, 10:42', 'R$ 2.480,00', 'Separando', 'bg-blue-50 text-blue-700'],
  ['#10481', 'Empório da Vila', 'Hoje, 09:18', 'R$ 860,00', 'Aguardando', 'bg-amber-50 text-amber-700'],
  ['#10480', 'Supermercado Ideal', 'Ontem, 17:36', 'R$ 4.120,00', 'Enviado', 'bg-emerald-50 text-emerald-700'],
  ['#10479', 'Casa do Norte', 'Ontem, 15:02', 'R$ 1.240,00', 'Entregue', 'bg-slate-100 text-slate-600'],
  ['#10478', 'Rede Bom Preço', 'Ontem, 11:45', 'R$ 3.680,00', 'Entregue', 'bg-slate-100 text-slate-600'],
];

export default function SalesPage() {
  return (
    <AppShell active="sales">
      <PageHeading
        eyebrow="Comercial"
        title="Pedidos de venda"
        description="Crie, acompanhe e organize os pedidos dos seus clientes."
        action={<PrimaryButton>+ Novo pedido</PrimaryButton>}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ['Todos os pedidos', '128', 'no período atual'],
          ['Aguardando ação', '12', 'precisam de atenção'],
          ['Faturamento', 'R$ 84.620', 'neste mês'],
        ].map(([label, value, detail]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-2xl font-bold">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{detail}</p>
          </div>
        ))}
      </div>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {['Todos', 'Aguardando', 'Separando', 'Enviados'].map((tab, index) => (
              <button key={tab} className={`rounded-lg px-3 py-2 text-xs font-semibold ${index === 0 ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}>{tab}</button>
            ))}
          </div>
          <input aria-label="Buscar pedido" placeholder="Buscar por pedido ou cliente..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-500 sm:w-64" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-400">
              <tr><th className="px-5 py-3">Pedido</th><th className="px-5 py-3">Cliente</th><th className="px-5 py-3">Data</th><th className="px-5 py-3">Total</th><th className="px-5 py-3">Status</th><th className="px-5 py-3" /></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map(([id, customer, date, total, status, statusColor]) => (
                <tr key={id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold">{id}</td><td className="px-5 py-4 text-slate-600">{customer}</td><td className="px-5 py-4 text-slate-500">{date}</td><td className="px-5 py-4 font-semibold">{total}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusColor}`}>{status}</span></td><td className="px-5 py-4 text-right text-slate-400">•••</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
