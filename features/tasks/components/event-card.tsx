import { Project } from "@/features/projects/types";
import { TaskStatus } from "../types";

interface EventCardProps {
    title: string;
    assignee: string;
    project: Project;
    status: TaskStatus;
    id: string;
}

const EventCard = ({
    title,
    assignee,
    project,
    status,
    id,
} : EventCardProps) => {
  return (
    <div>
      
    </div>
  )
}

export default EventCard;
