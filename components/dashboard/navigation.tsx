"use client";

import Link from "next/link";
import { SettingsIcon, UsersIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { cn } from "@/lib/utils";


const routes = [
    {
        label: "Home",
        herf: "",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "My Tasks",
        herf: "/tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        label: "Settings",
        herf: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        label: "Members",
        herf: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    },
    
]

export const Navigation = () => {

    const workspaceId = useWorkspaceId();
    const pathname = usePathname();
    return (
        <ul className="flex flex-col">
            {
                routes.map((item)=> {
                    const fullHerf = `/workspaces/${workspaceId}${item.herf}`
                    const isActive = pathname === fullHerf;
                    const Icon = isActive ? item.activeIcon : item.icon;
                    return (
                        <Link 
                        key={item.herf} 
                        href={fullHerf}
                        >
                            <div className={cn(
                                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
                                )}>
                                <Icon className="size-5 text-neutral-500"/>
                                {item.label}
                            </div>
                        </Link>
                    )
                })
            }
        </ul>
    );
};