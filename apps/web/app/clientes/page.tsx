import { AppShell, PageHeading, PrimaryButton } from '../components/AppShell';

const customers = [
  ['Mercado São João', 'Marcos Oliveira', 'marcos@mercadosaojoao.com', 'R$ 18.420,00', 'Ativo'],
  ['Empório da Vila', 'Ana Costa', 'ana@emporiodavila.com', 'R$ 12.860,00', 'Ativo'],
  ['Supermercado Ideal', 'João Mendes', 'joao@supermercadoideal.com', 'R$ 9.240,00', 'Ativo'],
  ['Casa do Norte', 'Luciana Alves', 'luciana@casadonorte.com', 'R$ 6.780,00', 'Ativo'],
];

export default function CustomersPage() {
  return (
    <AppShell active="customers">
      <PageHeading eyebrow="Relacionamento" title="Clientes" description="Tenha os dados e o histórico de cada cliente em um só lugar." action={<PrimaryButton>+ Novo cliente</PrimaryButton>} />
      <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-bold">Carteira de clientes</h2><p className="mt-1 text-xs text-slate-400">42 clientes cadastrados</p></div><input aria-label="Buscar cliente" placeholder="Buscar por nome ou e-mail..." className="rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-500 sm:w-64" /></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-400"><tr><th className="px-5 py-3">Cliente</th><th className="px-5 py-3">Contato</th><th className="px-5 py-3">E-mail</th><th className="px-5 py-3">Compras no mês</th><th className="px-5 py-3">Status</th><th className="px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{customers.map(([name, contact, email, total, status]) => <tr key={name} className="hover:bg-slate-50"><td className="px-5 py-4 font-semibold">{name}</td><td className="px-5 py-4 text-slate-600">{contact}</td><td className="px-5 py-4 text-slate-500">{email}</td><td className="px-5 py-4 font-semibold">{total}</td><td className="px-5 py-4"><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">{status}</span></td><td className="px-5 py-4 text-right text-slate-400">•••</td></tr>)}</tbody></table></div>
      </section>
    </AppShell>
  );
}
