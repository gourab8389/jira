"use client";

import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";

export const WorkspaceIdSettingsClient = async () => {
    return (
        <div className="w-full lg:max-w-xl">
        <EditWorkspaceForm initialValues={initialValues}/>
      </div>
    )
}