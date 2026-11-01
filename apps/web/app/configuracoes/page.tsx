import { AppShell, PageHeading } from '../components/AppShell';

export default function SettingsPage() {
  return (
    <AppShell active="settings">
      <PageHeading
        eyebrow="Configurações"
        title="Preferências"
        description="Ajuste os dados da operação e as preferências da sua equipe."
      />
      <section className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold">Dados da empresa</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Nome da empresa
            <input defaultValue="Arroz & Cia Distribuidora" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            E-mail de contato
            <input defaultValue="contato@arrozecia.com.br" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500" />
          </label>
        </div>
        <button className="mt-6 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          Salvar alterações
        </button>
      </section>
    </AppShell>
  );
}
