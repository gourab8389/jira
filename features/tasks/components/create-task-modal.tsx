"use client";
import { ResponsiveModal } from "@/components/dashboard/responsive-modal";

import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

import { useCreateTaskModal } from "../hooks/use-create-task-modal";


const CreateTaskModal = () => {
    const { isOpen, setIsOpen, close } = useCreateTaskModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
        <CreateTaskFormWrapper onCancel={close}/>
    </ResponsiveModal>
  )
}

export default CreateTaskModal;