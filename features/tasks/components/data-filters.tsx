import { ListChecksIcon } from "lucide-react";

import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { DatePicker } from "@/components/shared/date-picker";
import { DottedSeparator } from "@/components/shared/dotted-separator";
import { 
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectSeparator,
    SelectValue,
 } from "@/components/ui/select";

import { TaskStatus } from "../types";
import { useTaskFilters } from "../hooks/use-task-filters";


interface DataFiltersProps {
    hideProjectFilter?: boolean;
}

const DataFilters = ({
    hideProjectFilter
}: DataFiltersProps) => {

    const workspaceId = useWorkspaceId();

    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({ workspaceId });
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({ workspaceId });

    const isLoading = isLoadingProjects || isLoadingMembers;

    const projectOptions = projects?.documents.map((project) => ({
        value: project.$id,
        label: project.name,
    }));
    const memberOptions = members?.documents.map((member) => ({
        value: member.$id,
        label: member.name,
    }));

    const [{
        status,
        assigneeId,
        projectId,
        dueDate,
    }, setFilters] = useTaskFilters();

    const onStatusChange = (value: string) => {
        setFilters({ status: value === "all" ? null : value as TaskStatus });
    }

    if (isLoading) {
        return null;
    }

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <Select
      defaultValue={status ?? undefined}
      onValueChange={(value) => onStatusChange(value)}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
            <div className="flex items-center pr-2">
                <ListChecksIcon className="size-4 h-4 w-4 mr-2" />
                <SelectValue placeholder="All Statuses"/>
            </div>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <DottedSeparator/>
            <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
            <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
            <SelectItem value={TaskStatus.IN_REVIEW}>In Review</SelectItem>
            <SelectItem value={TaskStatus.TODO}>Todo</SelectItem>
            <SelectItem value={TaskStatus.DONE}>Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default DataFilters
