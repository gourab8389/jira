import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AuthNav = () => {
  return (
    <nav className='flex justify-between items-center'>
        <Image src={"/logo.svg"} alt='logo' width={50} height={50} className='shrink-0'/>

          <Button variant={"secondary"}>
            Sign Up
          </Button>
    </nav>
  )
}

export default AuthNav
