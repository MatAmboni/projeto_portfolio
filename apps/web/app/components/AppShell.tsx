import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navigation: NavItem[] = [
  { label: 'Visão geral', href: '/', key: 'overview' },
  { label: 'Vendas', href: '/vendas', key: 'sales' },
  { label: 'Estoque', href: '/estoque', key: 'inventory' },
  { label: 'Clientes', href: '/clientes', key: 'customers' },
  { label: 'Financeiro', href: '/financeiro', key: 'finance' },
];

export function AppShell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-slate-200 bg-white px-5 py-6 lg:flex">
        <Link href="/" className="flex items-center gap-3 px-2">
          <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-lg font-bold text-white">
            A
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight">ArrozERP</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Operações
            </span>
          </span>
        </Link>

        <nav className="mt-12 flex-1 space-y-1" aria-label="Navegação principal">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Menu principal
          </p>
          {navigation.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className={`size-2 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                {item.label}
              </Link>
            );
          })}
          <p className="mb-3 mt-10 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Configurações
          </p>
          <Link
            href="/configuracoes"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            <span className="size-2 rounded-full bg-slate-300" />
            Preferências
          </Link>
        </nav>

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs font-medium text-slate-400">Precisa de ajuda?</p>
          <p className="mt-1 text-sm leading-5">Consulte o guia de operações da equipe.</p>
          <button className="mt-4 text-xs font-semibold text-emerald-300 hover:text-emerald-200">
            Abrir central de ajuda →
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <div>
            <p className="text-sm text-slate-400">Sexta-feira, 14 de junho de 2024</p>
            <p className="text-sm font-semibold text-slate-700">Bom dia, equipe 👋</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Notificações"
              className="relative grid size-10 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              <span className="text-lg">♢</span>
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-rose-500" />
            </button>
            <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                MS
              </span>
              <div>
                <p className="text-sm font-semibold">Marina Silva</p>
                <p className="text-xs text-slate-400">Administradora</p>
              </div>
            </div>
          </div>
        </header>
        <nav className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white px-5 py-3 lg:hidden" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold ${
                item.key === active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">{eyebrow}</p>}
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>
      {action}
    </div>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700">
      {children}
    </button>
  );
}
