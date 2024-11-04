"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiAddCircleFill } from "react-icons/ri";

import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";



const Projects = () => {
    const projectId = null;


    const pathname = usePathname();
    const workspaceId = useWorkspaceId()
    const { data } = useGetProjects({ 
        workspaceId, 
    });

  return (
    <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-neutral-500">Projects</p>
                <RiAddCircleFill
                onClick={() => {}}
                className="text-neutral-500 size-5 cursor-pointer hover:opacity-75 transition"/>
            </div>
            {data?.documents.map((project) => {
                const href = `/workspaces/${workspaceId}/projects/${projectId}`;

                const isActive = pathname === href;

                return (
                    <Link href={href}>
                    </Link>
                )
            })}
    </div>
  )
}

export default Projects;
