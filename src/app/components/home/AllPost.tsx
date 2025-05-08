import { getAllPost } from '@/app/actions/post.actions'
import React, { useState } from 'react'
import PostCard from './PostCard'
import StaffPicks from './StaffPicks'
import RecommendedTopics from './RecommendedTopics'
import RecommendedUser from './RecommendedUser'

export interface ownerInterface {
    id: string
    profile: string,
    firstname: string,
    lastname: string,
    about: string,
    _count: {
        Followers: number
    }
}
interface likeCommentInterface {
    Likes: number,
    Comment: number
}
export interface postInterface {
    id: string,
    title: string,
    subtitle: string,
    image: string | null,
    createAt: Date,
    owner: ownerInterface | undefined,
    _count: likeCommentInterface
}
const getPostData = async () => {
    return await getAllPost()
}

const Card = async () => {
    
    const postData = await getAllPost()
    console.log(postData)

  return (
    <section className='mt-7'>
        <div className='flex'>
            <div className='lg:w-[80%] lg:px-24'>
                {
                    postData?.map((ele: postInterface, index: number) => {
                        return <PostCard ele={ele} key={index}/>
                    })
                }
            </div>
            <div className='hidden lg:block box-border p-2 lg:flex-1'>
                <StaffPicks/>
                <RecommendedTopics/>
                <RecommendedUser/>
            </div>
        </div>
    </section>
  )
}

export default Card