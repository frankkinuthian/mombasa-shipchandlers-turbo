import { EventConfig, Handlers } from "motia";
import { z } from "zod";
import { convexMutation, convexQuery } from "../../../src/integrations/convex";

const inputSchema = z
  .object({
    id: z.string(),
    user_id: z.string(),
  })
  .passthrough();

const api = {
  functions: {
    users: {
      getByClerkId: "functions/users:getByClerkId" as any,
    },
    sessions: {
      create: "functions/sessions:create" as any,
    },
  },
};

export const config: EventConfig = {
  name: "ClerkSessionCreated",
  type: "event",
  subscribes: ["clerk.session.created"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Track session creation in Convex",
};

// Retry helper with exponential backoff
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getUserWithRetry = async (
  clerkId: string,
  maxRetries = 5,
  baseDelay = 200
): Promise<any> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const user = await convexQuery(api.functions.users.getByClerkId, {
      clerkId,
    });
    if (user) return user;

    // Exponential backoff: 200ms, 400ms, 800ms, 1600ms, 3200ms
    if (attempt < maxRetries) {
      await sleep(baseDelay * Math.pow(2, attempt - 1));
    }
  }
  return null;
};

export const handler: Handlers["ClerkSessionCreated"] = async (
  input,
  { logger }
) => {
  const { id: sessionId, user_id } = input;

  logger.info("Session created", { clerkUserId: user_id, sessionId });

  try {
    // Get user with retry (handles race condition with user.created)
    const user = await getUserWithRetry(user_id);

    if (!user) {
      logger.warn(
        "User still not found after retries - session may be orphaned",
        {
          clerkUserId: user_id,
          sessionId,
        }
      );
      return;
    }

    await convexMutation(api.functions.sessions.create, {
      userId: user._id,
      clerkSessionId: sessionId,
    });

    logger.info("Session tracked in Convex", {
      clerkUserId: user_id,
      sessionId,
    });
  } catch (error) {
    logger.error("Failed to track session", { error, sessionId });
  }
};
