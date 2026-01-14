import { EventConfig, Handlers } from "motia";
import { z } from "zod";

const inputSchema = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const config: EventConfig = {
  name: "ClerkUserDeleted",
  type: "event",
  subscribes: ["clerk.user.deleted"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Handle user deletion from Clerk",
};

export const handler: Handlers["ClerkUserDeleted"] = async (
  input,
  { logger }
) => {
  const { id } = input;

  // For now, just log. We can add soft delete later
  logger.warn("User deleted in Clerk", { clerkId: id });

  // TODO: Implement soft delete in Convex
};
