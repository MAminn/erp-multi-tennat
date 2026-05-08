# ERP Platform

Multi-tenant, bilingual (Arabic / English) SaaS ERP for the Egyptian
wholesale and manufacturing market.

**Status:** Milestone 1.0 (Foundation Layer) — in progress.

## Stack

- **Framework:** Next.js 14 (App Router) with TypeScript (strict)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** Clerk
- **Validation:** Zod
- **Testing:** Vitest + Testing Library + jsdom

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file and fill it in
cp .env.example .env.local

# 3. Generate the Prisma client and apply migrations (once the schema exists)
npm run db:generate
npm run db:migrate

# 4. Run the dev server
npm run dev
```

Then open <http://localhost:3000>.

## Folder structure

```
prisma/                 Prisma schema, migrations, seed notes
src/
  app/                  Next.js App Router routes, layouts, pages
  components/           Reusable React components
    ui/                 Design-system primitives (shadcn/ui later)
  lib/                  Shared utilities (Prisma client, tenant context, …)
  server/               Server-only code
    actions/            Server Actions
  types/                Shared TypeScript types
tests/                  Vitest test suite
docs/                   Project documentation
```

## Environment variables

All secrets live in `.env.local` (gitignored). The committed
[.env.example](.env.example) documents every variable. Required for
Milestone 1.0:

| Variable                            | Purpose                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| `DATABASE_URL`                      | Supabase Postgres pooled connection (port 6543) — used by the app at runtime. |
| `DIRECT_URL`                        | Supabase Postgres direct connection (port 5432) — used by Prisma Migrate.     |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (browser-safe).                                         |
| `CLERK_SECRET_KEY`                  | Clerk secret key (server-only).                                               |

## Multi-tenancy

Every business-data table carries a `tenantId`. Every server-side data
access path goes through `getTenantContext()` and filters by `tenantId`.
This invariant is non-negotiable and is covered by an isolation test in
`tests/`.

## Scripts

| Script          | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the Next.js dev server. |
| `npm run build` | Production build.             |
| `npm run start` | Run the production build.     |
| `npm run lint`  | Run ESLint.                   |

Database and test scripts are added in Milestone 1.0 Task 2.
