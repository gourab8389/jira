"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export const WorkspaceSwitcher = () => {
    const { data } = useGetWorkspaces();
    return (
        <div className="">
            {JSON.stringify(data)}
        </div>
    )
}