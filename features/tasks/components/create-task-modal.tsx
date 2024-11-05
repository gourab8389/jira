import { ResponsiveModal } from "@/components/dashboard/responsive-modal";

import { useCreateTaskModal } from "../hooks/use-create-task-modal";


const CreateTaskModal = () => {
    const { isOpen, setIsOpen } = useCreateTaskModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
        <div className="">
            Todo: task form
        </div>
    </ResponsiveModal>
  )
}

export default CreateTaskModal;
