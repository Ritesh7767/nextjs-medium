import React from 'react'
import { usersInterface } from './SearchUser'
import Image from 'next/image'
import Link from 'next/link'

const DisplayUsers = ({users}: {users: usersInterface[]}) => {
  return (
    <div className='absolute top-14 p-2 rounded-md bg-white shadow-lg'>
        <h3 className='text-sm text-black/70 text-medium '>People</h3>
        <div className="p-3 w-3xs">
            {
                users.map((ele: usersInterface) => (
                    <div className='flex flex-col gap-3'>
                        <Link href={"#"} className='flex items-center gap-3'>
                            <img src={ele.profile} alt="" className='w-10 h-10 rounded-full' />
                            <p className='text-sm tracking-tight'>{ele.firstname + " " + ele.lastname}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DisplayUsers