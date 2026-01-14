import { ConvexHttpClient } from "convex/browser";

let _convexClient: ConvexHttpClient | null = null;

const getConvexClient = () => {
  if (!_convexClient) {
    const convexUrl = process.env.CONVEX_URL;
    if (!convexUrl) {
      throw new Error("CONVEX_URL environment variable not set");
    }
    _convexClient = new ConvexHttpClient(convexUrl);
  }
  return _convexClient;
};

export const convexMutation = async (mutation: any, args: any) => {
  return await getConvexClient().mutation(mutation, args);
};

export const convexQuery = async (query: any, args: any) => {
  return await getConvexClient().query(query, args);
};
