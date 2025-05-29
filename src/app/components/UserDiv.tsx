'use client'

import React, { useState } from 'react'
import { ownerInterface } from './home/AllPost'
import UserCard from './home/UserCard'
import Link from 'next/link'

const UserDiv = ({owner}: {owner: ownerInterface}) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className='flex items-center gap-2 relative'>
            <img src={owner?.profile} alt="profile image" className='w-8 h-8 rounded-full' />
            <div className='inline'>
              <Link
                  href={`/user?id=${owner.id}`} 
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className='relative hover:underline cursor-pointer text-sm whitespace-nowrap'>
              {owner.firstname + " " + owner.lastname}
              </Link>
            {hover && <UserCard owner={owner}/>}
            </div>
      </div>
  )
}

export default UserDiv