"use client"
import { usePathname } from "next/navigation";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const AuthNav = () => {

  const pathName = usePathname();
  const isSignIn = pathName === "/sign-in"

  return (
    <nav className='flex justify-between items-center'>
      <Image src={"/logo.svg"} alt='logo' width={50} height={50} className='shrink-0' />

      <Button asChild variant={"secondary"}>
        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
          {isSignIn ? "Sign Up" : "Login"}
        </Link>
      </Button>
    </nav>
  )
}

export default AuthNav
