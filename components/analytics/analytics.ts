interface analyticsProps {
    data?: {
        taskCount: number;
        taskDifference: number;
        projectCount?: number;
        projectDifference?: number;
        incompleteTaskCount?: number;
        incompleteTaskDifference?: number;
        assignedTaskCount: number;
        assignedTaskDifference: number;
        completedTaskCount: number;
        completedTaskDifference: number;
        overdueTaskCount: number;
        overdueTaskDifference: number;
    }
}

export const Analytics = (
    { data }: analyticsProps
) => {
    if(!data){
        return null;
    }

    
}