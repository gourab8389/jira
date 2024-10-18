import Image from 'next/image'
import React from 'react'

const AuthNav = () => {
  return (
    <nav className='flex justify-between items-center'>
        <Image src={"/logo.svg"} alt='logo' width={50} height={50} className='shrink-0'/>
    </nav>
  )
}

export default AuthNav
