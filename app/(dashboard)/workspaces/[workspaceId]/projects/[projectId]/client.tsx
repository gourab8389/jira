"use client";

import Link from "next/link";
import { PencilIcon } from "lucide-react";

import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { useProjectId } from "@/features/projects/hooks/use-task-id";
import { getProject } from "@/features/projects/queries";


import { Button } from "@/components/ui/button";
import { useGetProjects } from "@/features/projects/api/use-get-projects";

export const ProjectIdClient = () => {
    const projectId = useProjectId()
    const {} = useGetProjects()

    
    return (
        <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <ProjectAvatar
              name={initialValues.name}
              image={initialValues.imageUrl}
              className="size-8"
            />
            <p className="text-lg font-semibold">{initialValues.name}</p>
          </div>
          <div className="">
              <Button variant={"secondary"} size={"sm"} asChild>
                  <Link href={`/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}/settings`}>
                      <PencilIcon className="size-4 mr-2"/>
                      Edit Project
                  </Link>
              </Button>
          </div>
        </div>
        <TaskViewSwitcher hideProjectFilter />
      </div>
    )
}