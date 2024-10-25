import { ResponsiveModal } from "@/components/dashboard/responsive-modal";

import { CreateWorkspaceForm } from "./create-workspaces-form";

export const CreateWorkspaceModal = () => {

    return (
        <ResponsiveModal open onOpenChange={() => {}}>
            <CreateWorkspaceForm />
        </ResponsiveModal>
    );
};