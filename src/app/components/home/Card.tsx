// "use server"
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark, CiCircleMinus } from 'react-icons/ci'
import { FaComment, FaPlus } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'
import { MdOutlineBookmarkAdd } from 'react-icons/md'

interface postInterface {
    profile: string,
    image: string
    username: string,
    title: string,
    description: string
}

const postData: postInterface[] = [
    {
        profile: "https://avatar.iran.liara.run/username?username=vivek+gupta",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*UhE5xyQPEfCnu5vSGZTYNg.png",
        username: "vivek7767",
        title: "AI Engineering: A REALISTIC Roadmap for Beginners",
        description: "It's going to take longer than 6 months"
    },
    {
        profile: "https://avatar.iran.liara.run/username?username=vivek+gupta",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*UhE5xyQPEfCnu5vSGZTYNg.png",
        username: "vivek7767",
        title: "AI Engineering: A REALISTIC Roadmap for Beginners",
        description: "It's going to take longer than 6 months"
    },
    {
        profile: "https://avatar.iran.liara.run/username?username=vivek+gupta",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*UhE5xyQPEfCnu5vSGZTYNg.png",
        username: "vivek7767",
        title: "AI Engineering: A REALISTIC Roadmap for Beginners",
        description: "It's going to take longer than 6 months"
    },
    {
        profile: "https://avatar.iran.liara.run/username?username=vivek+gupta",
        image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*UhE5xyQPEfCnu5vSGZTYNg.png",
        username: "vivek7767",
        title: "AI Engineering: A REALISTIC Roadmap for Beginners",
        description: "It's going to take longer than 6 months"
    },
]

const Card = async () => {
  return (
    <section className='mt-7'>
            <div className=''>
            {   
                postData.map((ele: postInterface, index: number) => {
                    const {profile, image, username, title, description} = ele
                    return (
                        <div className='px-5 border border-slate-100' key={index}>
                        <div className='flex items-center gap-2'>
                            <img src={profile} alt="profile image" className='w-8 h-8' />
                            <p>{username}</p>
                        </div>
                        <div className='flex justify-between gap-4 mt-3'>
                            <div className='w-3/5'>
                                <h2 className='font-bold text-xl'>{title}</h2>
                                <p className='text-black/75 mt-1'>{description}</p>
                            </div>
                            <div className='flex-1'>
                                <img src={image} alt="post image" className='object-cover'/>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5 mb-9 sm:w-3/5 pr-4'>
                            <div className='flex gap-3 text-sm items-center sm:gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <FaPlus className='text-amber-400' />
                                    <span>Apr 11</span>
                                </div>
                                <div className='flex gap-2'>
                                    <FaHandsClapping/>
                                    <span>573</span>
                                </div>
                                <div className='flex gap-2'>
                                    <FaComment className=''/>
                                    <span>9</span>
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