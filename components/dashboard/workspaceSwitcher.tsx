"use client";

import { RiAddCircleFill } from "react-icons/ri";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export const WorkspaceSwitcher = () => {
    const { data } = useGetWorkspaces();
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-neutral-500">Workspaces</p>
                <RiAddCircleFill className="text-neutral-500 size-5 cursor-pointer hover:opacity-75 transition"/>
            </div>
            <Select>
                <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
                    <SelectValue placeholder="No workspaces slected"/>
                </SelectTrigger>
            </Select>
        </div>
    )
}