# Development Workflow

## Running the Monorepo

### All Apps (except database)

```bash
bun turbo dev
```

This starts:

- **Motia** (test): `http://localhost:3000`
- **Dashboard**: `http://localhost:3001`
- **Web**: `http://localhost:3002`
- **Docs**: `http://localhost:3003`

### Database (Convex) - Run Separately

```bash
cd packages/database
bunx convex dev
```

Or use the convenience script:

```bash
bun run --filter=@repo/database convex
```

## Port Mapping

| Service     | Port | URL                     |
| ----------- | ---- | ----------------------- |
| Motia (API) | 3000 | http://localhost:3000   |
| Dashboard   | 3001 | http://localhost:3001   |
| Web         | 3002 | http://localhost:3002   |
| Docs        | 3003 | http://localhost:3003   |
| Convex      | N/A  | Dashboard at convex.dev |
