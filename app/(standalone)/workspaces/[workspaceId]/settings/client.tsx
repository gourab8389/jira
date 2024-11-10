"use client";

import { PageError } from "@/components/shared/page-error";
import { PageLoader } from "@/components/shared/page-loader";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export const WorkspaceIdSettingsClient = async () => {

    const workspaceId = useWorkspaceId();

    const { data: initialValues, isLoading } = useGetProject({ workspaceId });

    if (isLoading) {
        return <PageLoader/>;
    }

    if(!initialValues) {
        return <PageError message="Project not found"/>;
    }
    
    return (
        <div className="w-full lg:max-w-xl">
        <EditWorkspaceForm initialValues={initialValues}/>
      </div>
    )
}