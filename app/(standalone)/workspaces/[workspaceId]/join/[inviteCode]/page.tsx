import { getCurrent } from "@/features/auth/queries";
import { getWrokspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";


interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  }
}

const WorkspaceIdJoinPage = async ({
  params,
}: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  if(!user) redirect("/sign-in");

  const workspace = await getWrokspaceInfo({
    workspaceId: params.workspaceId,
  })

  return (
    <div>
     {JSON.stringify(workspace)}
    </div>
  );
};

export default WorkspaceIdJoinPage;