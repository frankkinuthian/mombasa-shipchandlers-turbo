import { ApiRequest } from "motia";

export interface ClerkWebhookData {
  id: string;
  type: string;
  data: Record<string, any>;
  object: string;
  timestamp: number;
}

declare module "motia" {
  interface ApiRequest<TBody = unknown> {
    clerkWebhook?: ClerkWebhookData;
    clerkUserId?: string;
    isVerified?: boolean;
  }
}
