import { AppShell, PageHeading, PrimaryButton } from '../components/AppShell';

const products = [
  ['Arroz Tipo 1 5kg', 'ARR-005', '432 un.', 'R$ 24,90', 'Normal', 'bg-emerald-50 text-emerald-700'],
  ['Arroz Parboilizado 5kg', 'PAR-005', '12 un.', 'R$ 26,50', 'Estoque baixo', 'bg-amber-50 text-amber-700'],
  ['Arroz Integral 1kg', 'INT-001', '84 un.', 'R$ 8,90', 'Normal', 'bg-emerald-50 text-emerald-700'],
  ['Arroz Tipo 1 1kg', 'ARR-001', '0 un.', 'R$ 5,60', 'Sem estoque', 'bg-rose-50 text-rose-700'],
  ['Feijão Carioca 1kg', 'FEI-001', '756 un.', 'R$ 7,80', 'Normal', 'bg-emerald-50 text-emerald-700'],
];

export default function InventoryPage() {
  return (
    <AppShell active="inventory">
      <PageHeading eyebrow="Operação" title="Estoque" description="Controle seus produtos e evite rupturas na operação." action={<PrimaryButton>+ Cadastrar produto</PrimaryButton>} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[['Total de itens', '1.284', 'em 38 produtos'], ['Estoque baixo', '8', 'produtos para repor'], ['Valor em estoque', 'R$ 42.680', 'custo total estimado']].map(([label, value, detail]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-2xl font-bold">{value}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></div>
        ))}
      </div>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-bold">Produtos cadastrados</h2><p className="mt-1 text-xs text-slate-400">Atualizado há poucos minutos</p></div><input aria-label="Buscar produto" placeholder="Buscar produto ou SKU..." className="rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-emerald-500 sm:w-64" /></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-400"><tr><th className="px-5 py-3">Produto</th><th className="px-5 py-3">SKU</th><th className="px-5 py-3">Quantidade</th><th className="px-5 py-3">Preço de venda</th><th className="px-5 py-3">Situação</th><th className="px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{products.map(([name, sku, quantity, price, situation, situationColor]) => <tr key={sku} className="hover:bg-slate-50"><td className="px-5 py-4 font-semibold">{name}</td><td className="px-5 py-4 font-mono text-xs text-slate-500">{sku}</td><td className="px-5 py-4 text-slate-600">{quantity}</td><td className="px-5 py-4 font-semibold">{price}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${situationColor}`}>{situation}</span></td><td className="px-5 py-4 text-right text-slate-400">•••</td></tr>)}</tbody></table></div>
      </section>
    </AppShell>
  );
}
