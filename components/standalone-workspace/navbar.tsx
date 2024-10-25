import Image from "next/image"
import Link from "next/link"

import { UserButton } from "@/features/auth/components/user-button";


const WorkspaceNavbar = () => {
  return (
    <nav className="flex justify-between items-center h-[73px]">
        <Link href={"/"}>
        <Image
        src={"/logo.svg"}
        alt="logo"
        height={50}
        width={50}
        />
        </Link>
        <UserButton/>
    </nav>
  )
}

export default WorkspaceNavbar;
