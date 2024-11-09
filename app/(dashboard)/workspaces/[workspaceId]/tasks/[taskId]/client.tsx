"use client";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";
import { TaskBreadCrumbs } from "@/features/tasks/components/task-breadcrumbs";

import { PageLoader } from "@/components/shared/page-loader";
import { PageError } from "@/components/shared/page-error";
import { DottedSeparator } from "@/components/shared/dotted-separator";
import { TaskOverview } from "@/features/tasks/components/task-overview";

export const TaskIdClient = () => {
    const taskId = useTaskId();
    const { data, isLoading } = useGetTask({ taskId });

    if(isLoading) {
        return <PageLoader/>
    }

    if(!data) {
        return <PageError message="Task not found"/>
    }

    return (
        <div className="flex flex-col">
            <TaskBreadCrumbs project={data.project} task={data} />
            <DottedSeparator className="my-6"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <TaskOverview task={data}/>
            </div>
        </div>
    )
}