import { EventConfig, Handlers } from "motia";
import { z } from "zod";
import { convexMutation } from "../../../src/integrations/convex";

const inputSchema = z
  .object({
    id: z.string(),
    email_addresses: z.array(
      z
        .object({
          email_address: z.string(),
        })
        .passthrough()
    ),
    first_name: z.unknown(),
    last_name: z.unknown(),
  })
  .passthrough();

const api = {
  functions: {
    users: {
      create: "functions/users:create" as any,
    },
  },
};

export const config: EventConfig = {
  name: "ClerkUserCreated",
  type: "event",
  subscribes: ["clerk.user.created"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Create user in Convex when Clerk user is created",
};

export const handler: Handlers["ClerkUserCreated"] = async (
  input,
  { logger }
) => {
  const { id, email_addresses, first_name, last_name } = input;

  logger.info("Creating user in Convex", { clerkId: id });

  try {
    const userId = await convexMutation(api.functions.users.create, {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      firstName: first_name,
      lastName: last_name,
    });

    logger.info("User created in Convex", {
      clerkId: id,
      convexUserId: userId,
    });
  } catch (error) {
    logger.error("Failed to create user", { error, clerkId: id });
    throw error;
  }
};
