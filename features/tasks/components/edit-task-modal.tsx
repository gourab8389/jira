"use client";
import { ResponsiveModal } from "@/components/dashboard/responsive-modal";

import { EditTaskFormWrapper } from "./edit-task-form-wrapper";

import { useEditTaskModal } from "../hooks/use-edit-task-modal";


const EditTaskModal = () => {
    const { taskId, close } = useEditTaskModal();
  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
       {taskId && (
         <EditTaskFormWrapper onCancel={close} id={taskId}/>
       )}
    </ResponsiveModal>
  )
}

export default EditTaskModal;
