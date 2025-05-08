'use client'

import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { GoBell, GoPlus } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { TfiWrite } from 'react-icons/tfi'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import MediumLogo from '../MediumLogo'
import UserProfile from '../UserProfile'

const Navbar = () => {

  return (
    <header>
        <div className="">
            <div className='opacity-80 py-1 text-center'>Open in app &#x2197;</div>
        </div>
        <div className='px-4 border border-slate-200'>
            <nav className='flex justify-between text-xl'>
                <div className='flex items-center gap-x-5'>
                    <MediumLogo/>
                    <div className='hidden sm:flex bg-slate-100 rounded-2xl items-center gap-x-2'>
                        <CiSearch className='ml-2'/>
                        <input type="text" className='rounded-3xl text-sm outline-none w-full h-full p-2 ' />
                    </div>
                </div>
                <div className='flex items-center gap-x-8 cursor-pointer'>
                    <IoSearchOutline className='sm:hidden'/>
                    <TfiWrite onClick={() => redirect("/write")} className='hidden md:block' />
                    <GoBell/>
                    <UserProfile/>
                </div>
            </nav>
        </div>
            <nav className='flex gap-6 items-center text-black/65 mt-3 pl-4'>
                <GoPlus/>
                <Link href={"#"} >For you</Link>
                <Link href={"#"} >Following</Link>
                <Link href={"#"} >Features</Link>
            </nav>
    </header>
  )
}

export default Navbar