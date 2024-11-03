import { z } from "zod";
import { Query } from "node-appwrite";
import { Hono } from "hono";

import { sessionMiddleware } from "@/lib/session-middleware";
import { zValidator } from "@hono/zod-validator";
import { DATABASE_ID, MEMBERS_ID } from "@/config";
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
            }, 401);
        }

        const members = await databases.listDocuments(
            DATABASE_ID,
            MEMBERS_ID,
            [Query.equal("workspaceId", workspaceId)]
        );

        const populatedMembers = await Promise.all(
            members.documents.map(async (member) => {
                const user = await users.get(member.userId);
                return {
                    ...member,
                    name: user.name,
                    email: user.email,
                }
            })
        );

        return c.json({
            data: {
                ...members,
                documents: populatedMembers,
            }
        });
    }
)
.delete(
    "/:memberId",
    sessionMiddleware,
    async (c) => {
        const { memberId } = c.req.param();
        const user = c.get("user");
        const databases = c.get("databases");

        const memberToDelete = await databases.getDocument(
            DATABASE_ID,
            MEMBERS_ID,
            memberId
        );

        const allMembersInWorkspace = await databases.listDocuments(
            DATABASE_ID,
            MEMBERS_ID,
            [Query.equal("workspaceId", memberToDelete.workspaceId)]
        )
    }
)

export default app;

