"use client"

import React, { useState } from 'react'
import UserCard from './UserCard'
import { postInterface } from './AllPost'
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark, CiCircleMinus } from 'react-icons/ci'
import { FaComment, FaPlus } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'
import Link from 'next/link'
import UserDiv from '../UserDiv'
import CardFooter from '../post/CardFooter'

const PostCard = ({ele}: {ele: postInterface}) => {
    const {title, subtitle, image, createAt, owner, _count, id} = ele
    const {Likes, Comment} = _count
    
    const date = new Date(createAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    })

    return (
    <Link href={`/post?id=${id}`} className='px-5 border border-slate-100'>
        {owner && <UserDiv owner={owner}/>}
        <div className='flex justify-between gap-4 mt-3'>
            <div className='w-3/5'>
                <h2 className='post-title'>{title}</h2>
                <p className='post-subtitle'>{subtitle}</p>
            </div>
            {
                image && 
                        <div className='flex-1 flex justify-center items-center'>
                            <img src={image} alt="post image" className='w-[25vh] h-28 '/>
                        </div>
            }
        </div>
        <div className='flex justify-between items-center mt-5 mb-9 sm:w-3/5 pr-4'>
            <CardFooter date={date} Likes={Likes} Comment={Comment} />
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