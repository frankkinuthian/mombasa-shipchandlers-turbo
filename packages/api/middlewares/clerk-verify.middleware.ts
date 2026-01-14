/**
 * Clerk Webhook Verification Middleware
 *
 * Verifies Clerk webhook signatures using Svix
 * Attaches verified webhook data to request.clerkWebhook
 */

import { ApiMiddleware } from "motia";
import { Webhook } from "svix";

export const clerkVerifyMiddleware: ApiMiddleware = async (req, ctx, next) => {
  const { logger } = ctx;
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  logger.info("Webhook secret check", {
    hasSecret: !!webhookSecret,
    secretLength: webhookSecret?.length,
  });

  if (!webhookSecret) {
    logger.error("CLERK_WEBHOOK_SECRET not configured");
    return {
      status: 500,
      body: { error: "Webhook secret not configured" },
    };
  }

  // Extract Svix headers
  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    logger.error("Missing Svix headers");
    return {
      status: 400,
      body: { error: "Missing webhook headers" },
    };
  }

  const wh = new Webhook(webhookSecret);

  try {
    const payload = wh.verify(JSON.stringify(req.body), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    // Attach verified payload to request
    req.clerkWebhook = payload as any;
    req.isVerified = true;

    logger.info("Clerk webhook verified", {
      type: (payload as any).type,
      id: (payload as any).data?.id,
    });

    return await next();
  } catch (err) {
    logger.error("Webhook verification failed", { error: err });
    return {
      status: 401,
      body: { error: "Invalid webhook signature" },
    };
  }
};
