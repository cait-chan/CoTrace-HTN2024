import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
    args: {
        language: v.string(),
        pronunciation: v.string(),
        translation: v.string(),
    },
    handler: async (ctx, args) => {
        // Insert the user-provided values into the database
        const submissionId = await ctx.db.insert("submissions", {
            language: args.language,
            pronunciation: args.pronunciation,
            translation: args.translation,
        });
    },
});
