import React from 'react'
import { CiMail } from 'react-icons/ci'
import { ownerInterface } from '../home/AllPost'

const UserDetails = ({user}: {user: ownerInterface}) => {

    const {profile, firstname, lastname, about, _count} = user
  return (
    <div className='flex flex-col gap-2'>
        <img
            className='w-24 h-24 rounded-full' 
            src={profile}/>
        <p className='font-bold'>{firstname + " " + lastname}</p>
        <p className='text-black/70 text-sm' >{_count.Followers} followers</p>
        <p className='text-black/70 text-sm'>{about}</p>
        <div className='flex gap-2'>
            <button className='btn bg-green-800'>Follow</button>
            <CiMail className='mail' />
        </div>
    </div>
  )
}

export default UserDetails