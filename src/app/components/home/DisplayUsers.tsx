import React from 'react'
import Link from 'next/link'
import { ownerInterface } from './AllPost'

const DisplayUsers = ({users, handleClick}: {users: ownerInterface[], handleClick: () => void}) => {
  return (
    <div className='z-40 border border-black absolute top-14 p-2 rounded-md bg-white shadow-lg'>
        <h3 className='text-sm text-black/70 text-medium '>People</h3>
        <div className="w-sm p-3 rounded-md">
            {
                users.map((ele: ownerInterface, index: number) => (
                    <Link href={`/user?id=${ele.id}`} key={index} onClick={handleClick} className='flex items-center gap-2'>
                        <img alt='' src={ele.profile} className='profile w-8 h-8 ' />
                        <p className='text-sm '>{ele.firstname} {ele.lastname}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default DisplayUsers