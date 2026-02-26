# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 3** (Vue 3) marketing website for Gamevrest Studio. It is a single-service app — no backend API, no database in use.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Nuxt Dev Server | `npm run dev` | 3000 | The only service. Hot-reloads on file changes. |

### Lint / Test / Build

- **No ESLint** config or linter is set up in the project.
- **No test framework** or test files exist.
- **TypeScript checking**: `npx nuxi typecheck` — note there is a pre-existing TS error in `pages/game/[id].vue` (argument type mismatch). This does not block the dev server.
- **Build**: `npm run build` (production), `npm run generate` (static).
- **Dev**: `npm run dev` starts the Nuxt dev server on port 3000.

### Gotchas

- Prisma is listed as a dev dependency and a schema exists at `prisma/schema.prisma`, but it defines **zero models** and no code queries the database. PostgreSQL is **not required** to run the app.
- The `postinstall` script runs `nuxt prepare` which generates types in `.nuxt/`. This runs automatically after `npm install`.
- The `.env` file contains a placeholder `DATABASE_URL` (unused) and `baseUrl` for OG meta tags.
- The `@nuxt/image-edge` module is included alongside `@nuxt/image` in `nuxt.config.ts` modules array.
