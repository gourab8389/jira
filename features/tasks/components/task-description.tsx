import { useState } from "react";
import { PencilIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DottedSeparator } from "@/components/shared/dotted-separator";

import { Task } from "../types";
import { useUpdateTask } from "../api/use-update-task";

interface TaskDescriptionProps {
    task: Task;
}

export const TaskDescription = ({ task }: TaskDescriptionProps) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ value, setValue ] = useState(task.description);
    const { mutate, isPending } = useUpdateTask();

    const handleSave = () => {
        mutate({
            json: { description: value },
            param: { taskId: task.$id }
        })
    }


    return (
        <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                    Overview
                </p>
                <Button
                onClick={() => setIsEditing((prev) => !prev)}
                variant={"secondary"}
                size={"sm"}
                >
                    {isEditing ? (
                        <XIcon className="size-4 mr-2"/>
                    ) : (
                        <PencilIcon className="size-4 mr-2"/>
                    )}
                    {isEditing ? "Cancel" : "Edit"}
                </Button>
            </div>
            <DottedSeparator className="my-4"/>
            <div className="flex flex-col gap-y-4">
                <div className="">
                    {task.description || (
                        <span>
                            No description provided
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}