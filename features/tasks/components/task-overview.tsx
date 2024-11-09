import { Button } from "@/components/ui/button";
import { Task } from "../types";
import { PencilIcon } from "lucide-react";

interface TaskOverviewProps {
    task: Task;
}

export const TaskOverview = ({
     task 
}: TaskOverviewProps) => {
    <div className="flex flex-col gap-y-4 col-span-1">
        <div className="bg-muted rounded-lg p-4">
            <p className="text-lg font-semibold">Overview</p>
            <Button>
                <PencilIcon/>
            </Button>
        </div>
    </div>
}