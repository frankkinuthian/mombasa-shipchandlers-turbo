import { ApiRouteConfig, Handlers } from "motia";
import { clerkVerifyMiddleware } from "../../middlewares/clerk-verify.middleware";

type ClerkEventType =
  | "clerk.user.created"
  | "clerk.user.updated"
  | "clerk.user.deleted"
  | "clerk.session.created"
  | "clerk.session.ended"
  | "clerk.session.removed";

export const config: ApiRouteConfig = {
  name: "ClerkWebhook",
  type: "api",
  path: "/webhooks/clerk",
  method: "POST",
  middleware: [clerkVerifyMiddleware],
  emits: [
    "clerk.user.created",
    "clerk.user.updated",
    "clerk.user.deleted",
    "clerk.session.created",
    "clerk.session.ended",
    "clerk.session.removed",
  ],
  flows: ["clerk-integration"],
  description: "Receive all Clerk webhook events and emit internal events",
};

export const handler: Handlers["ClerkWebhook"] = async (
  req,
  { emit, logger }
) => {
  const webhook = req.clerkWebhook!;

  logger.info("Processing Clerk webhook", {
    type: webhook.type,
    id: webhook.data?.id,
  });

  // Map Clerk webhook type to our internal event topic
  const topic = `clerk.${webhook.type}` as ClerkEventType;

  // Emit internal event
  await emit({
    topic,
    data: webhook.data as any,
  });

  return {
    status: 200,
    body: {
      received: true,
      type: webhook.type,
    },
  };
};
