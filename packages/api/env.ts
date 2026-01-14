// Environment variables for API package
export const apiEnv = {
  CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
  CONVEX_URL: process.env.CONVEX_URL,
} as const;
