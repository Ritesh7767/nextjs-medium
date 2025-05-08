"use client"

import React, { useState } from 'react'
import UserCard from './UserCard'
import { postInterface } from './AllPost'
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark, CiCircleMinus } from 'react-icons/ci'
import { FaComment, FaPlus } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'
import Link from 'next/link'

const PostCard = ({ele}: {ele: postInterface}) => {
    const {title, subtitle, image, createAt, owner, _count, id} = ele
    // const {firstname, lastname, profile, id} = owner
    const {Likes, Comment} = _count
    const [hover, setHover] = useState<boolean>(false)
    
    const date = new Date(createAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    })

    return (
    <Link href={`/post?id=${id}`} className='px-5 border border-slate-100'>
        {owner && <div className='flex items-center gap-2 relative'>
            <img src={owner.profile} alt="profile image" className='w-8 h-8' />
            <Link 
                href={`/user?id=${owner.id}`} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='relative hover:underline cursor-pointer'>
            {owner.firstname + " " + owner.lastname}
                {hover && <UserCard owner={owner}/>}
            </Link>
        </div>}
        <div className='flex justify-between gap-4 mt-3'>
            <div className='w-3/5'>
                <h2 className='font-bold text-xl'>{title}</h2>
                <p className='text-black/75 mt-1'>{subtitle}</p>
            </div>
            {
                image && 
                        <div className='flex-1 flex justify-center items-center'>
                            <img src={image} alt="post image" className='h-32 w-full object-contain'/>
                        </div>
            }
        </div>
        <div className='flex justify-between items-center mt-5 mb-9 sm:w-3/5 pr-4'>
            <div className='flex gap-3 text-sm items-center sm:gap-5'>
                <div className='flex gap-2 items-center'>
                    <FaPlus className='text-amber-400' />
                    <span>{date}</span>
                </div>
                <div className='flex gap-2'>
                    <FaHandsClapping/>
                    <span>{Likes}</span>
                </div>
                <div className='flex gap-2'>
                    <FaComment className=''/>
                    <span>{Comment}</span>
                </div>
            </div>
            <div className='flex gap-3 text-2xl'>
                <CiCircleMinus/>
                <CiBookmark className='hidden sm:block' />
                <BsThreeDots/>
            </div>
        </div>
    </Link>
)
}

export default PostCard