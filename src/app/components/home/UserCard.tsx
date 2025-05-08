import React from 'react'
import { ownerInterface } from './AllPost'
import Image from 'next/image'

const UserCard = ({owner}: {owner: ownerInterface}) => {
    console.log(owner)
    const {firstname, lastname, profile, about, _count} = owner
  return (
    <div className='shadow-lg rounded-sm w-72 p-4 absolute bg-white -right-56'>
        <div className='flex justify-between items-center'>
            <div>
                <img src={profile} alt='user profile' className='w-16 h-16 rounded-full' />
                <span className='font-bold mt-4'>{firstname + " " + lastname}</span>
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn'>Follow</button>
            </div>
        </div>
        <p className='text-black/70 mt-5 tracking-tight'>{about}</p>  
    </div>
  )
}

export default UserCard