import { EventConfig, Handlers } from "motia";
import { z } from "zod";
import { convexMutation } from "../../../src/integrations/convex";

const inputSchema = z
  .object({
    id: z.string(),
  })
  .passthrough();

const api = {
  functions: {
    sessions: {
      end: "functions/sessions:end" as any,
    },
  },
};

export const config: EventConfig = {
  name: "ClerkSessionEnded",
  type: "event",
  subscribes: ["clerk.session.ended"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Track session end in Convex",
};

export const handler: Handlers["ClerkSessionEnded"] = async (
  input,
  { logger }
) => {
  const { id: sessionId } = input;

  logger.info("Session ended", { sessionId });

  try {
    await convexMutation(api.functions.sessions.end, {
      clerkSessionId: sessionId,
    });

    logger.info("Session ended in Convex", { sessionId });
  } catch (error) {
    logger.error("Failed to end session", { error, sessionId });
  }
};
