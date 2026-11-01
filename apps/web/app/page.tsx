import Link from 'next/link';
import { AppShell, PageHeading, PrimaryButton } from './components/AppShell';

export default function HomePage() {
  return (
    <AppShell active="overview">
      <PageHeading
        eyebrow="Visão geral"
        title="Tudo sob controle."
        description="Acompanhe o que está acontecendo na operação hoje."
        action={<PrimaryButton>+ Novo pedido</PrimaryButton>}
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores">
        {[
          ['Vendas no mês', 'R$ 84.620,00', '+12,8%', 'text-emerald-600'],
          ['Pedidos em aberto', '32', '+4 hoje', 'text-blue-600'],
          ['Produtos em estoque', '1.284', '8 em estoque baixo', 'text-amber-600'],
          ['A receber', 'R$ 26.450,00', '3 vencidos', 'text-rose-600'],
        ].map(([label, value, change, color]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <span className={`size-2 rounded-full ${(color ?? 'text-slate-400').replace('text-', 'bg-')}`} />
            </div>
            <p className="mt-4 text-2xl font-bold tracking-tight">{value}</p>
            <p className={`mt-2 text-xs font-semibold ${color ?? 'text-slate-400'}`}>{change}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold">Resumo de vendas</h2>
              <p className="mt-1 text-xs text-slate-400">Receita bruta nos últimos 7 dias</p>
            </div>
            <select className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-500">
              <option>Últimos 7 dias</option>
              <option>Este mês</option>
            </select>
          </div>
          <div className="mt-8 flex h-48 items-end gap-3 border-b border-slate-100 px-2">
            {[42, 58, 48, 76, 62, 88, 70].map((height, index) => (
              <div key={height + index} className="group flex h-full flex-1 flex-col justify-end gap-2">
                <div className="relative rounded-t-md bg-emerald-500 transition group-hover:bg-emerald-600" style={{ height: `${height}%` }}>
                  <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 rounded bg-slate-900 px-1.5 py-1 text-[10px] text-white group-hover:block">
                    R$ {(height * 120).toLocaleString('pt-BR')}
                  </span>
                </div>
                <span className="text-center text-[11px] text-slate-400">
                  {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold">Pedidos recentes</h2>
              <p className="mt-1 text-xs text-slate-400">Acompanhe os últimos pedidos</p>
            </div>
            <Link href="/vendas" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">Ver todos</Link>
          </div>
          <div className="mt-5 space-y-4">
            {[
              ['#10482', 'Mercado São João', 'R$ 2.480,00', 'Separando', 'bg-blue-50 text-blue-700'],
              ['#10481', 'Empório da Vila', 'R$ 860,00', 'Aguardando', 'bg-amber-50 text-amber-700'],
              ['#10480', 'Supermercado Ideal', 'R$ 4.120,00', 'Enviado', 'bg-emerald-50 text-emerald-700'],
              ['#10479', 'Casa do Norte', 'R$ 1.240,00', 'Entregue', 'bg-slate-100 text-slate-600'],
            ].map(([id, customer, value, status, statusColor]) => (
              <div key={id} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{id} <span className="font-normal text-slate-400">· hoje</span></p>
                  <p className="mt-0.5 text-xs text-slate-500">{customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{value}</p>
                  <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColor}`}>{status}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Atenção necessária</h2>
            <p className="mt-1 text-xs text-slate-400">Itens que precisam de uma ação da equipe</p>
          </div>
          <Link href="/estoque" className="text-xs font-semibold text-emerald-600">Ir para estoque →</Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ['Estoque baixo', 'Arroz Parboilizado 5kg', 'Restam 12 unidades', 'bg-amber-50'],
            ['Pagamento vencido', 'Mercado São João', 'Vencido há 3 dias', 'bg-rose-50'],
            ['Pedido pendente', '#10481 · Empório da Vila', 'Aguardando confirmação', 'bg-blue-50'],
          ].map(([type, title, detail, background]) => (
            <div key={title} className={`rounded-xl p-4 ${background}`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{type}</p>
              <p className="mt-2 text-sm font-bold">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
