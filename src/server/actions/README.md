# server/actions

Next.js Server Actions ("use server"). One file per domain (e.g. `tenants.ts`, `products.ts`). Each action validates its inputs with Zod, calls `getTenantContext()` to resolve the current user and tenant, performs its database work scoped by `tenantId`, and returns a typed result discriminated union (success or error) — never throws into the client.
