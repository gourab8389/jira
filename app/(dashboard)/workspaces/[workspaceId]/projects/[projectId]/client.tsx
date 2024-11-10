"use client";

import Link from "next/link";
import { PencilIcon } from "lucide-react";

import { useProjectId } from "@/features/projects/hooks/use-task-id";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";


import { Button } from "@/components/ui/button";
import { Analytics } from "@/components/analytics/analytics";
import { PageLoader } from "@/components/shared/page-loader";
import { PageError } from "@/components/shared/page-error";


export const ProjectIdClient = () => {
    const projectId = useProjectId();

    const { data: project, isLoading: isLoadingProject } = useGetProject({ projectId });
    const { data: analytics, isLoading: iaLoadingAnalytics } = useGetProjectAnalytics({ projectId });

    const isLoading = isLoadingProject || iaLoadingAnalytics;

    if(isLoading){
        return <PageLoader/>
    }

    if(!project){
        return <PageError message="Project not found"/>;
    }
    return (
        <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <ProjectAvatar
              name={project.name}
              image={project.imageUrl}
              className="size-8"
            />
            <p className="text-lg font-semibold">{project.name}</p>
          </div>
          <div className="">
              <Button variant={"secondary"} size={"sm"} asChild>
                  <Link href={`/workspaces/${project.workspaceId}/projects/${project.$id}/settings`}>
                      <PencilIcon className="size-4 mr-2"/>
                      Edit Project
                  </Link>
              </Button>
          </div>
        </div>
        {analytics ? (
          <Analytics data={analytics} />
        ) : null }
        <TaskViewSwitcher hideProjectFilter />
      </div>
    )
}