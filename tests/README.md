# tests

Vitest test suite. Includes unit tests, integration tests against the dev Supabase database (e.g. multi-tenant isolation), and component tests using `@testing-library/react`. The shared setup file `tests/setup.ts` registers jest-dom matchers and loads environment variables. Tests must be repeatable: clean up any rows they create.
