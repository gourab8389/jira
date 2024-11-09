"use client";

import { useGetProject } from "@/features/projects/api/use-get-project";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { useProjectId } from "@/features/projects/hooks/use-task-id";

import { PageError } from "@/components/shared/page-error";
import { PageLoader } from "@/components/shared/page-loader";

export const ProjectIdSettingsClient = async () => {

    const projectId = useProjectId();

    const { data: initialValues, isLoading } = useGetProject({ projectId });

    if (isLoading) {
        return <PageLoader/>;
    }

    if(!initialValues) {
        return <PageError message="Project not found"/>;
    }

    return (
    <div className='w-full lg:max-w-xl'>
        <EditProjectForm initialValues={initialValues}/>
    </div>
    )
}