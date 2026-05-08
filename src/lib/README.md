# lib

Shared utilities used across the application: the Prisma client singleton, the tenant-context helper, validation schemas, formatters, and other small framework-agnostic helpers. Code here may be imported from both Server Components and Client Components, so keep server-only imports out of files that may be bundled to the client (use `src/server/` for those).
