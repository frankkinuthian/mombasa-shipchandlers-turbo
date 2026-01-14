import { defineLive } from "next-sanity/live";
import { sanityClient } from "@repo/sanity";

// Viewer token for draft content (optional - needed for draft previews)
const token = process.env.SANITY_API_READ_TOKEN;

// Export sanityFetch helper and SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: token,
  browserToken: token,
});
