import Image from "next/image";
import Link from "next/link";

import Projects from "./projects";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspaceSwitcher";
import { DottedSeparator } from "../shared/dotted-separator";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link href={"/"}>
                <Image src={"/logo.svg"} alt="logo" width={48} height={24}/>
            </Link>
            <DottedSeparator className="my-4"/>
            <WorkspaceSwitcher/>
            <DottedSeparator className="my-4"/>
            <Navigation/>
            <DottedSeparator className="my-4"/>
            <Projects/>
        </aside>
    );
};