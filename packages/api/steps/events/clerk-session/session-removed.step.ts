import { EventConfig, Handlers } from "motia";
import { z } from "zod";

const inputSchema = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const config: EventConfig = {
  name: "ClerkSessionRemoved",
  type: "event",
  subscribes: ["clerk.session.removed"],
  input: inputSchema,
  emits: [],
  flows: ["clerk-integration"],
  description: "Handle session removal from Clerk",
};

export const handler: Handlers["ClerkSessionRemoved"] = async (
  input,
  { logger }
) => {
  const { id: sessionId } = input;

  // Same as ended - just log for now
  logger.info("Session removed", { sessionId });
};
