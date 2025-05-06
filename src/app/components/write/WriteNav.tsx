import React from 'react'
import MediumLogo from '../MediumLogo'
import { BsThreeDots } from 'react-icons/bs'
import { GoBell } from 'react-icons/go'
import UserProfile from '../UserProfile'

const WriteNav = () => {
  return (
    <header className='px-4'>
        <nav className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <MediumLogo/>
                <span>Draft</span>
            </div>
            <div className='flex items-center gap-8'>
                <button className='btn bg-green-600 py-1'>Publish</button>
                <BsThreeDots className='text-xl' />
                <GoBell className='text-xl'/>
                <UserProfile/>
            </div>
        </nav>
    </header>
  )
}

export default WriteNav