# Environment Setup

## Clerk Authentication Keys

You need to get your Clerk keys from [dashboard.clerk.com](https://dashboard.clerk.com)

Add these to your `.env` or `.env.local` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_KEY_HERE

# Clerk URLs (already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## How to Get Clerk Keys

1. Go to [clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Go to **API Keys** in your dashboard
4. Copy your **Publishable Key** and **Secret Key**
5. Paste them into your `.env.local` file

## Running the App

```bash
bun dev
```

Then navigate to `http://localhost:3000` - you'll be redirected to sign-in!
