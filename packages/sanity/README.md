# @repo/sanity

Shared Sanity CMS package for Mombasa Ship Chandlers.

## What's inside?

- **Schemas**: Product catalogue, navigation configuration
- **Client**: Configured Sanity client for read/write operations
- **Types**: TypeScript types for all schemas

## Usage

### In Dashboard or Motia

```typescript
import { sanityClient } from "@repo/sanity";

// Fetch products
const products = await sanityClient.fetch(`
  *[_type == "product"] {
    _id,
    name,
    sku,
    price,
    category
  }
`);

// Fetch navigation
const navConfig = await sanityClient.fetch(`
  *[_type == "navigation" && id == "main"][0] {
    items[] {
      label,
      url,
      icon,
      roles[]
    }
  }
`);
```

### Image URLs

```typescript
import { urlForImage } from "@repo/sanity";

const imageUrl = urlForImage(product.images[0]).width(800).height(600).url();
```

## Environment Variables

Required in all apps consuming Sanity:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=akndkv0c
NEXT_PUBLIC_SANITY_DATASET=production
```

For server-side writes:

```env
SANITY_API_TOKEN=your_token_here
```

## Schemas

### Product

Ship chandling supplies with:

- Name, SKU, description
- Category (safety, deck, engine, galley, etc.)
- Price, stock quantity
- Images with hotspot
- Specifications

### Navigation

Configurable sidebar navigation with:

- Label, URL, icon
- Role-based visibility
- Grouping support
- Sort order

## Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Client](https://www.sanity.io/docs/js-client)
