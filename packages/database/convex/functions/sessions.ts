import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    userId: v.id("users"),
    clerkSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("sessions", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const end = mutation({
  args: {
    clerkSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_clerk_session", (q) =>
        q.eq("clerkSessionId", args.clerkSessionId)
      )
      .first();

    if (!session) return null;

    await ctx.db.patch(session._id, {
      endedAt: Date.now(),
    });

    return session._id;
  },
});
