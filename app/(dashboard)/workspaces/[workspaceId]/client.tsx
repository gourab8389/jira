"use client";

import { Task } from "@/features/tasks/types";
import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { useGetTasks } from "@/features/tasks/api/use-get-tasks";
import { useCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { useGetWorkspaceAnalytics } from "@/features/workspaces/api/use-get-workspace-analytics";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { Analytics } from "@/components/analytics/analytics";
import { PageError } from "@/components/shared/page-error";
import { PageLoader } from "@/components/shared/page-loader";
import { Button } from "@/components/ui/button";


export const WorkspaceIdClient = () => {

    const workspaceId = useWorkspaceId();

    const { data: analytics, isLoading: isLoadingAnalytics } = useGetWorkspaceAnalytics({ workspaceId });
    const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({ workspaceId });
    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({ workspaceId });
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({ workspaceId });

    const { open: createProject } = useCreateProjectModal();
    const { open: createTask } = useCreateTaskModal();

    const isLoading = isLoadingAnalytics || isLoadingTasks || isLoadingProjects || isLoadingMembers;

    if(isLoading){
         return <PageLoader/> 
    }

    if(!analytics || !tasks || !projects || !members){
        return (
            <PageError message="Failed to load workspace"/>
        )
    }

    return (
        <div className="h-full flex flex-col space-y-4">
            <Analytics data={analytics}/>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <TaskList data={tasks.documents} total={tasks.total}/>
            </div>
        </div>
    )
}


interface TaskListProps {
    data: Task[];
    total: number;
}

export const TaskList = ({ data, total }: TaskListProps) => {
    return (
        <div className="flex flex-col gap-y-1 col-span-1">
            <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                        Tasks ({total})
                    </p>
                    <Button variant={"muted"}>

                    </Button>
                </div>
            </div>
        </div>
    )
}