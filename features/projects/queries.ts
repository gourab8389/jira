import { createSessionClient } from "@/lib/appwrite";

import { getMember } from "@/features/members/utils";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";

interface GetProjectProps {
    projectId: string;
  }
  
  export const getProject = async ({ projectId }: GetProjectProps) => {
    try {
      const { databases, account } = await createSessionClient();
      const user = await account.get();
  
      const project = await databases.getDocument<Workspace>(
        DATABASE_ID,
        WORKSPACES_ID,
        projectId
      );

      const member = await getMember({
        databases,
        userId: user.$id,
        workspaceId
      });
  
      if (!member) {
        return null;
      }
  
  
      return workspace;
    } catch {
      return null;
    }
  };