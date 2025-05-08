'use client'

import { getAllUser } from '@/app/actions/user.actions'
import React, { useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import DisplayUsers from './DisplayUsers'

export interface usersInterface {
    profile: string,
    firstname: string,
    lastname: string
}

const SearchUser = () => {

    const [users, setUsers] = useState<usersInterface[] | null>(null)
    const id = useRef<NodeJS.Timeout | null>(null)
    console.log(users)

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (id.current) clearTimeout(id.current)
        id.current = setTimeout(async () => {
            if (e.target.value){
                const user = await getAllUser(e.target.value)
                if (user) setUsers(user)
                else setUsers(null)
            } else {
                setUsers(null)
            }
        }, 1000)
    }
  return (
    <div className='hidden sm:flex bg-slate-100 rounded-2xl items-center gap-x-2'>
        <CiSearch className='ml-2'/>
        <input onChange={handleChange} type="text" className='rounded-3xl text-sm outline-none w-full h-full p-2 ' />
        {users && <DisplayUsers users={users} />}
    </div>
  )
}

export default SearchUser