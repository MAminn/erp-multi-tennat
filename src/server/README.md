# server

Server-only code that must never be bundled to the client: Server Actions, Route Handlers, and any helpers that touch secrets, the database, or server-side auth. Files here may import `src/lib/prisma.ts` and the tenant-context utility freely. Every entry point that reads or writes business data must call `getTenantContext()` and filter by `tenantId`.
