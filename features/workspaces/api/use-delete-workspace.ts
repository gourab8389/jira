import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.workspaces[":workspaceId"]["$delete"]>;

type RequestType = InferRequestType<typeof client.api.workspaces[":workspaceId"]["$delete"]>;

export const useDeleteeWorkspace = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
    >({
       mutationFn: async ({param}) => {
        const response = await client.api.workspaces[":workspaceId"]["$delete"]({ param });

        if(!response.ok){
            throw new Error("Failed to delete workspace");
        }

        return await response.json();
       },
       onSuccess: () => {
        toast.success("Workspace deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["workspaces"]});
       },
       onError: () => {
        toast.error("Failed to delete workspace");
       }
    });
    return mutation;
};