'use client'

import React from 'react'
import { GoBell } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { TfiWrite } from 'react-icons/tfi'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import MediumLogo from '../MediumLogo'
import UserProfile from '../UserProfile'
import SearchUser from './SearchUser'

const Navbar = () => {

  return (
    <header className='relative overflow-hidden'>
        <div className="">
            <div className='opacity-80 py-1 text-center'>Open in app &#x2197;</div>
        </div>
        <div className='px-4 border border-slate-200'>
            <nav className='flex justify-between text-xl'>
                <div className='relative flex items-center gap-x-5'>
                    <Link href={"/main"}>
                        <MediumLogo/>
                    </Link>
                    <SearchUser/>
                </div>
                <div className='flex items-center gap-x-8 cursor-pointer'>
                    <IoSearchOutline className='sm:hidden'/>
                    <TfiWrite onClick={() => redirect("/write")} className='hidden md:block' />
                    <GoBell/>
                    <UserProfile/>
                </div>
            </nav>
        </div>
            {/* <nav className='flex gap-6 items-center text-black/65 mt-3 pl-4'>
                <GoPlus/>
                <Link href={"#"} >For you</Link>
                <Link href={"#"} >Following</Link>
                <Link href={"#"} >Features</Link>
            </nav> */}
    </header>
  )
}

export default Navbar