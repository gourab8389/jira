import { ExternalLinkIcon, PencilIcon, Trash } from "lucide-react";

import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";

 interface TaskActionsProps {
    id: string;
    projectId: string;
    children: React.ReactNode;
}

export const TaskActions = ({
     id, 
     projectId, 
     children 
    }: TaskActionsProps) => {
    return (
        <div className="flex justify-end">
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                    className="font-medium p-[10px]"
                    onClick={() => {}}
                    disabled={false}
                    >
                        <ExternalLinkIcon className="size-4 mr-2 stroke-2"/>
                        Task Details
                    </DropdownMenuItem>

                    <DropdownMenuItem
                    className="font-medium p-[10px]"
                    onClick={() => {}}
                    disabled={false}
                    >
                        <PencilIcon className="size-4 mr-2 stroke-2"/>
                        Edit Task
                    </DropdownMenuItem>

                    <DropdownMenuItem
                    className="font-medium p-[10px]"
                    onClick={() => {}}
                    disabled={false}
                    >
                        <ExternalLinkIcon className="size-4 mr-2 stroke-2"/>
                        Open Project
                    </DropdownMenuItem>

                    <DropdownMenuItem
                    className="text-amber-700 font-medium p-[10px] focus:text-amber-700"
                    onClick={() => {}}
                    disabled={false}
                    >
                        <Trash className="size-4 mr-2 stroke-2"/>
                        Delete Task
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>        
    )
}