import { z } from "zod";
import { Hono } from "hono";

import { sessionMiddleware } from "@/lib/session-middleware";
import { zValidator } from "@hono/zod-validator";
import { createAdminClient } from "@/lib/appwrite";
import { getMember } from "../utils";

const app = new Hono()
.get(
    "/",
    sessionMiddleware,
    zValidator("query", z.object({
        workspaceId: z.string()
    })),
    async (c) => {
        const { users } = await createAdminClient();
        const databases = c.get("databases");
        const user = c.get("user");
        const { workspaceId } = c.req.valid("query");

        const member = await getMember({
            databases,
            workspaceId,
            userId: user.$id
        });

        if(!member){
            return c.json({
                error: "Unauthorized"
            }, 404);
        }
    }
)

export default app;

