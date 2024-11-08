import { useRouter } from "next/navigation";
import { ExternalLinkIcon, PencilIcon, Trash } from "lucide-react";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { useConfirm } from "@/hooks/use-confrim";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDeleteTask } from "../api/use-delete-task";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";

interface TaskActionsProps {
  id: string;
  projectId: string;
  children: React.ReactNode;
}

export const TaskActions = ({ id, projectId, children }: TaskActionsProps) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();

  const { open } = useEditTaskModal();

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Task",
    "The action cannot be undone. Are you sure you want to delete this task?",
    "destructive"
  );
  const { mutate, isPending } = useDeleteTask();

  const onDelete = async () => {
    const ok = await confirm();
    if (!ok) return;

    mutate({ param: { taskId: id } });
  };

  const onOpenTask = () => {
    router.push(`/workspaces/${workspaceId}/tasks/${id}`);
  };

  const onOpenProject = () => {
    router.push(`/workspaces/${workspaceId}/projects/${projectId}`);
  };

  return (
    <div className="flex justify-end">
      <ConfirmDialog />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            className="font-medium p-[10px]"
            onClick={onOpenTask}
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke-2" />
            Task Details
          </DropdownMenuItem>

          <DropdownMenuItem
            className="font-medium p-[10px]"
            onClick={onOpenProject}
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke-2" />
            Open Project
          </DropdownMenuItem>

          <DropdownMenuItem className="font-medium p-[10px]" onClick={() => open(id)}>
            <PencilIcon className="size-4 mr-2 stroke-2" />
            Edit Task
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-amber-700 font-medium p-[10px] focus:text-amber-700"
            onClick={onDelete}
            disabled={isPending}
          >
            <Trash className="size-4 mr-2 stroke-2" />
            Delete Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
