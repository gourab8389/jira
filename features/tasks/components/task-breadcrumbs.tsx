import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRightIcon, TrashIcon } from "lucide-react";

import { Project } from "@/features/projects/types";
import { Task } from "../types";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { Button } from "@/components/ui/button";
import { useDeleteTask } from "../api/use-delete-task";
import { useConfirm } from "@/hooks/use-confrim";


interface TaskBreadcrumbsProps {
    project: Project;
    task: Task;
}

export const TaskBreadCrumbs = ({ project, task }: TaskBreadcrumbsProps) => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();

    const { mutate } = useDeleteTask();
    const [ confrimDialog, confrim ] = useConfirm(
        "Delete task",
        "This action cannot be undone.",
        "destructive",
    );

    const handleDeleteTask = async () => {
        const ok = await confrim();
        if(ok) {
            return;
        }
        mutate({ param: { taskId: task.$id } }, {
            onSuccess: () => {
                router.push(`/workspaces/${workspaceId}/tasks`);
            },
        });
    }

    return (
        <div className="flex items-center gap-x-2">
            <ProjectAvatar
            name={project.name}
            image={project.image}
            className="size-6 lg:size-8"
            />
            <Link href={`/workspaces/${workspaceId}/projects/${project.$id}`}>
            <p className="text-sm lg:text-lg font-semibold text-muted-foreground hover:opacity-75 transition">
                {project.name}
            </p>
            </Link>
            <ChevronRightIcon className="size-4 lg:size-5 text-muted-foreground"/>
            <p className="text-sm lg:text-lg font-semibold">
            {task.name}
            </p>
            <Button
            onClick={handleDeleteTask}
            className="ml-auto"
            size="sm"
            variant="destructive"
            >
                <TrashIcon className="size-4 lg:mr-2"/>
                <span className="hidden lg:block">Delete Task</span>
            </Button>
        </div>
    )
}