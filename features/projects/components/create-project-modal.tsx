"use client"
import { ResponsiveModal } from "@/components/dashboard/responsive-modal";
import { CreateProjectForm } from "./create-project-form";
import { useCreateProjectModal } from "../hook/use-create-project-modal";



export const CreateWorkspaceModal = () => {

    const { isOpen, setIsOpen, close } = useCreateProjectModal();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
            <CreateProjectForm onCancel={close}/>
        </ResponsiveModal>
    );
};