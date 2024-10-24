import  Image  from "next/image";

import { cn } from "@/lib/utils";

import {
    Avatar,
    AvatarFallback
} from "@/components/ui/avatar";

interface WorkspaceAvatarProps {
    image?: string;
    name: string;
    className?: string;
}

export const WorkspaceAvatar = ({
    image,
    name,
    className
}: WorkspaceAvatarProps) => {
    if(image){
        return (
            <div className="">
                <Image src={image} alt={"avatar"} />
            </div>
        )
    }
}