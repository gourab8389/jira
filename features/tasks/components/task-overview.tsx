import { PencilIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/shared/dotted-separator";
import { MemberAvatar } from "@/features/members/components/member-avatar";

import { OverviewProperty } from "./overview-property";

import { Task } from "../types";
import TaskDate from "./task-date";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Overview</p>
          <Button size={"sm"} variant={"secondary"}>
            <PencilIcon className="size-4 mr-2" />
          </Button>
        </div>
        <DottedSeparator className="my-4"/>
        <div className="flex flex-col gap-y-4">
            <OverviewProperty label="Assignee">
                <MemberAvatar
                name={task.assignee.name}
                className="size-6"
                />
                <p className="text-sm font-medium">
                {task.assignee.name}
                </p>
            </OverviewProperty>

            <OverviewProperty label="Due Date">
                <TaskDate value={task.dueDate} className="text-sm font-medium"/>
            </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
