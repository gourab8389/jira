import { getCurrent } from "@/features/auth/actions"
import { getWrokspace } from "@/features/workspaces/actions";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";


interface WorkspaceIdSettingsPageProps {
    params: {
        workspaceId: string;
    };
};

const WorkspaceIdSettingsPage = async ({
    params,
}: WorkspaceIdSettingsPageProps) => {

    const user = await getCurrent();
    if(!user) redirect("/sign-in");


    const initialValues = await getWrokspace({ workspaceId: params.workspaceId });

    if(!initialValues){
        redirect(`/workspaces/${params.workspaceId}`)
    }


  return (
    <div>
      <EditWorkspaceForm initialValues={initialValues}/>
    </div>
  )
}

export default WorkspaceIdSettingsPage
