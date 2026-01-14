import { EventConfig, Handlers } from "motia";
import { z } from "zod";
import { convexMutation } from "../../../src/integrations/convex";

const inputSchema = z.object({
  id: z.string(),
  email_addresses: z
    .array(
      z
        .object({
          email_address: z.string(),
        })
        .passthrough()
    )
    .optional(),
  first_name: z.unknown(),
  last_name: z.unknown(),
});

const api = {
  functions: {
    users: {
      update: "functions/users:update" as any,
    },
  },
};

export const config: EventConfig = {
  name: "ClerkUserUpdated",
  type: "event",
  subscribes: ["clerk.user.updated"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Update user in Convex when Clerk user is updated",
};

export const handler: Handlers["ClerkUserUpdated"] = async (
  input,
  { logger }
) => {
  const { id, email_addresses, first_name, last_name } = input;

  logger.info("Updating user in Convex", { clerkId: id });

  try {
    await convexMutation(api.functions.users.update, {
      clerkId: id,
      email: email_addresses?.[0]?.email_address,
      firstName: first_name,
      lastName: last_name,
    });

    logger.info("User updated in Convex", { clerkId: id });
  } catch (error) {
    logger.error("Failed to update user", { error, clerkId: id });
    throw error;
  }
};
