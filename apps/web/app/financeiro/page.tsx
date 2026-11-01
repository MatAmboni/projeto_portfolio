import { AppShell, PageHeading, PrimaryButton } from '../components/AppShell';

const receivables = [
  ['Mercado São João', '#10462', '18 jun 2024', 'R$ 2.480,00', 'Vence em 2 dias', 'bg-amber-50 text-amber-700'],
  ['Empório da Vila', '#10451', '11 jun 2024', 'R$ 860,00', 'Vencido', 'bg-rose-50 text-rose-700'],
  ['Supermercado Ideal', '#10440', '25 jun 2024', 'R$ 4.120,00', 'Em aberto', 'bg-blue-50 text-blue-700'],
  ['Casa do Norte', '#10422', '05 jun 2024', 'R$ 1.240,00', 'Pago', 'bg-emerald-50 text-emerald-700'],
];

export default function FinancePage() {
  return (
    <AppShell active="finance">
      <PageHeading eyebrow="Gestão financeira" title="Financeiro" description="Acompanhe recebimentos e mantenha o caixa saudável." action={<PrimaryButton>+ Lançar recebimento</PrimaryButton>} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[['A receber', 'R$ 26.450,00', '32 títulos em aberto'], ['Recebido no mês', 'R$ 58.170,00', '+8,4% vs. mês anterior'], ['Em atraso', 'R$ 1.860,00', '3 títulos vencidos']].map(([label, value, detail]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-2xl font-bold">{value}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></div>)}
      </div>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-bold">Contas a receber</h2><p className="mt-1 text-xs text-slate-400">Visão dos lançamentos recentes</p></div><button className="text-xs font-semibold text-emerald-600">Exportar relatório ↓</button></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-400"><tr><th className="px-5 py-3">Cliente</th><th className="px-5 py-3">Referência</th><th className="px-5 py-3">Vencimento</th><th className="px-5 py-3">Valor</th><th className="px-5 py-3">Situação</th><th className="px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{receivables.map(([customer, reference, dueDate, value, status, statusColor]) => <tr key={reference} className="hover:bg-slate-50"><td className="px-5 py-4 font-semibold">{customer}</td><td className="px-5 py-4 text-slate-500">{reference}</td><td className="px-5 py-4 text-slate-600">{dueDate}</td><td className="px-5 py-4 font-semibold">{value}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusColor}`}>{status}</span></td><td className="px-5 py-4 text-right text-slate-400">•••</td></tr>)}</tbody></table></div>
      </section>
    </AppShell>
  );
}
