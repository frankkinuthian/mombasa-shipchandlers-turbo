# Sanity Studio

Content Management System for Mombasa Ship Chandlers.

## Getting Started

1. **Install dependencies** (if not already done):

   ```bash
   bun install
   ```

2. **Start the Studio**:

   ```bash
   cd apps/studio
   bun dev
   ```

3. **Access the Studio**:
   Open [http://localhost:3333/studio](http://localhost:3333/studio)

## What can you manage?

### Products

- Ship chandling supplies catalogue
- Add/edit product details, images, specifications
- Manage inventory levels

### Navigation

- Configure dashboard sidebar menu
- Set role-based access for menu items
- Group navigation items

## Environment Variables

Create a `.env` file in the project root with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=akndkv0c
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

## Deployment

### Option 1: Sanity Hosted

```bash
cd apps/studio
bun run deploy
```

This deploys to `mombasa-shipchandlers.sanity.studio`

### Option 2: Your Own Hosting

The Studio is a Next.js app and can be deployed anywhere Next.js runs (Vercel, etc.)

## Learn More

- [Sanity Studio Documentation](https://www.sanity.io/docs/sanity-studio)
- [Project Dashboard](https://www.sanity.io/manage)
