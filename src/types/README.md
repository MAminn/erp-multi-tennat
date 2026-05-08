# types

Shared TypeScript types and interfaces used across multiple modules — for example, the shape returned by `getTenantContext()`, role enums mirrored from Prisma, and cross-cutting result types. Module-local types should stay next to the code that uses them; only promote a type here when it is shared.
