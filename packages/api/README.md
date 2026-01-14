# @repo/api

Motia-powered API package for handling Clerk webhooks and syncing user data to Convex.

## Features

- **Clerk Webhook Handling** - Receives and verifies Clerk webhook signatures
- **User Lifecycle Events** - user.created, user.updated, user.deleted
- **Session Tracking** - session.created, session.ended, session.removed
- **Convex Integration** - Syncs users and sessions to Convex database
- **Idempotent Operations** - Handles duplicate webhooks gracefully

## Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Configure `.env`:

```
CONVEX_URL=https://your-project.convex.cloud
CLERK_WEBHOOK_SECRET=whsec_your_secret_here
```

3. Get webhook secret from [Clerk Dashboard](https://dashboard.clerk.com) → Webhooks

## Development

```bash
# Run with Turbo (recommended)
bun turbo dev

# Or run standalone
bun run dev
```

Open Motia Workbench at http://localhost:3000

## Webhook Endpoint

Configure Clerk webhook to: `https://your-domain.com/webhooks/clerk`

### Subscribed Events

- `user.created` → Creates user in Convex
- `user.updated` → Updates user in Convex
- `user.deleted` → Handles user deletion
- `session.created` → Tracks session start
- `session.ended` → Tracks session end
- `session.removed` → Handles session removal

## Architecture

```
Clerk Webhook → Motia API → Event Handlers → Convex DB
                   ↓
            Workbench UI (localhost:3000)
```

## Key Files

- `middlewares/clerk-verify.middleware.ts` - Svix signature verification
- `steps/webhooks/clerk-webhook.step.ts` - Main webhook receiver
- `steps/events/clerk-user/` - User event handlers
- `steps/events/clerk-session/` - Session event handlers
- `src/integrations/convex.ts` - Convex client utilities
