"use client";

import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";

export const WorkspaceIdJoinClient = () => {
    

    return (
        <div className="w-full lg:max-w-xl">
        <JoinWorkspaceForm 
        initialValues={initialValues}
        />
       </div>
    )
}