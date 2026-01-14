// Environment variables for database package
// Apps should compose this with their own env vars

export const databaseEnv = {
  CONVEX_URL: process.env.CONVEX_URL,
  CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
} as const;
