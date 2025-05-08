import { getAllPost } from '@/app/actions/post.actions'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark, CiCircleMinus } from 'react-icons/ci'
import { FaComment, FaPlus } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'

interface ownerInterface {
    profile: string,
    firstname: string,
    lastname: string
}
interface likeCommentInterface {
    Likes: number,
    Comment: number
}
interface postInterface {
    title: string,
    subtitle: string,
    image: string | null,
    createAt: Date,
    owner: ownerInterface,
    _count: likeCommentInterface
}
const getPostData = async () => {
    return await getAllPost()
}

const Card = async () => {
    
    const postData = await getPostData()
    console.log(postData)

  return (
    <section className='mt-7'>
            <div className=''>
            {   
                postData?.map((ele: postInterface, index: number) => {
                    const {title, subtitle, image, createAt, owner, _count} = ele
                    const {firstname, lastname, profile} = owner
                    const {Likes, Comment} = _count
                    const date = new Date(createAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short"
                    })

                    return (
                        <div className='px-5 border border-slate-100' key={index}>
                        <div className='flex items-center gap-2'>
                            <img src={profile} alt="profile image" className='w-8 h-8' />
                            <p>{firstname + " " + lastname}</p>
                        </div>
                        <div className='flex justify-between gap-4 mt-3'>
                            <div className='w-3/5'>
                                <h2 className='font-bold text-xl'>{title}</h2>
                                <p className='text-black/75 mt-1'>{subtitle}</p>
                            </div>
                            {
                                image && 
                                        <div className='flex-1 flex justify-center items-center'>
                                            <img src={image} alt="post image" className='h-32 object-contain'/>
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
                    </div>
                )   
                })
            }
        </div>
    </section>
  )
}

export default Card