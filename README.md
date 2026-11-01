# ArrozERP

ERP didático para uma distribuidora de pacotes de arroz. O projeto foi pensado para
aprender desenvolvimento full stack com uma arquitetura próxima de um produto real.

## Stack

- **Web:** Next.js, React, TypeScript, Tailwind CSS e shadcn/ui
- **API:** NestJS, TypeScript e REST
- **Dados:** PostgreSQL e Prisma
- **Qualidade:** ESLint, Prettier, testes e GitHub Actions
- **Organização:** npm workspaces em um monorepo

## Pré-requisitos

- Node.js 20.9+
- npm 11+
- Docker Desktop

## Rodando

```bash
npm install
Copy-Item .env.example .env
npm run db:up
npm run dev
```

O frontend ficará em `http://localhost:3000` e a API em `http://localhost:3333/health`.

## MVP

1. Autenticação e perfis de acesso
2. Cadastro de produtos e clientes
3. Controle básico de estoque
4. Pedidos de venda
5. Contas a receber
6. Dashboard operacional

## Fluxo de GitHub

Para cada funcionalidade:

1. Criar uma issue descrevendo o problema e os critérios de aceite.
2. Criar uma branch `feature/nome-da-funcionalidade` a partir de `develop`.
3. Fazer commits pequenos seguindo Conventional Commits (`feat:`, `fix:`, `test:`, `docs:`).
4. Abrir um Pull Request com contexto, screenshots quando houver UI e testes executados.
5. Fazer revisão e integrar em `develop`; somente releases chegam à `main`.

## Status da interface

O painel web já possui as telas operacionais de visão geral, vendas, estoque, clientes,
financeiro e preferências, com dados demonstrativos e navegação responsiva. O próximo passo
é conectar essas telas à API: migration Prisma, endpoints `POST /products` e `GET /products`,
validação com DTOs e persistência dos dados reais.
