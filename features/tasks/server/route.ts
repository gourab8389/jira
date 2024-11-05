import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { DATABASE_ID, TASKS_ID } from "@/config";
import { sessionMiddleware } from "@/lib/session-middleware";

import { createTaskSchema } from "../schemas";
import { Query } from "node-appwrite";

const app = new Hono()
.post(
    "/",
    sessionMiddleware,
    zValidator("json", createTaskSchema),
    async (c) => {
        const user = c.get("user");
        const databases = c.get("databases");
        const {
            name,
            status,
            workspaceId,
            projectId,
            dueDate,
            assigneeId,
        } = c.req.valid("json");

        const member = await getMember({
            databases,
            workspaceId,
            userId: user.$id,
        })

        if(!member){
            return c.json({ error: "Unauthorized" }, 401);
        }

        const highestPositionTask = await databases.listDocuments(
            DATABASE_ID,
            TASKS_ID,
            [
                Query.equal("status", status),
                Query.equal("workspaceId", workspaceId),
                Query.orderAsc("position"),
                Query.limit(1),
            ]
        )
    }
)

export default app;

