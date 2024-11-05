import { z } from "zod";
import { Hono } from "hono";
import { ID, Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";

import { getMember } from "@/features/members/utils";

import { DATABASE_ID, TASKS_ID } from "@/config";
import { sessionMiddleware } from "@/lib/session-middleware";
import { createAdminClient } from "@/lib/appwrite";

import { createTaskSchema } from "../schemas";
import { TaskStatus } from "../types";



const app = new Hono()
.get(
    "/",
    sessionMiddleware,
    zValidator(
        "query",
        z.object({
            workspaceId: z.string(),
            projectId: z.string().nullish(),
            assigneeId: z.string().nullish(),
            status: z.nativeEnum(TaskStatus).nullish(),
            search: z.string().nullish(),
            dueDate: z.string().nullish(),
        })
    ),
    async (c) => {
        const { users } = await createAdminClient();
        const databases = c.get("databases");
        const user = c.get("user");

        const {
            workspaceId,
            projectId,
            status,
            search,
            assigneeId,
            dueDate,
        } = c.req.valid("query");

        const member = await getMember({
            databases,
            workspaceId,
            userId: user.$id,
        })
    }
)
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
            ],
        );

        const newPostion = highestPositionTask?.documents.length > 0 ? highestPositionTask.documents[0].position + 1000 : 1000;

        const task = await databases.createDocument(
            DATABASE_ID,
            TASKS_ID,
            ID.unique(),
            {
                name,
                status,
                workspaceId,
                projectId,
                dueDate,
                assigneeId,
                position: newPostion,
            },
        );

        return c.json({ data: task });
    }
)

export default app;

