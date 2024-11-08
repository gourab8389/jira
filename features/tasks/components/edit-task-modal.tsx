"use client";
import { ResponsiveModal } from "@/components/dashboard/responsive-modal";

import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

import { useEditTaskModal } from "../hooks/use-edit-task-modal";


const EditTaskModal = () => {
    const { taskId, setTaskId, close } = useEditTaskModal();
  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
       {taskId && (
         <CreateTaskFormWrapper onCancel={close}/>
       )}
    </ResponsiveModal>
  )
}

export default EditTaskModal;
