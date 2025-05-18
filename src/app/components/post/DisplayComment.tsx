"use client"

import React, { useEffect, useState } from 'react'
import UserDiv from '../UserDiv'
import { getComments, registerComment } from '@/app/actions/comment.actions'
import { ownerInterface } from '../home/AllPost'

interface commentInterface {
    comment: string,
    user: ownerInterface
}

interface commentState {
    comment: string,
    postId: string
}

const DisplayComment = ({postId, displayComment, handleComment}: {postId: string, displayComment: boolean, handleComment: () => void}) => {

    const [comment, setComment] = useState<commentState>({
        comment: "",
        postId
    })
    const [commentArr, setCommentArr] = useState<commentInterface[] | null>(null);
    useEffect(() => {
        (
            async () => {
                const response = await getComments(postId)
                console.log(response)
                setCommentArr(response)
            }
        )()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment((prev: commentState) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("clicked")
        const response = await registerComment(comment)
        console.log(response)
        if (response) setCommentArr(response)
    }
    console.log(comment)
  return (
        <section
            onClick={handleComment}
            style={{
                transform: !displayComment ? `translateX(100%)`: ""    
            }}
            className='absolute top-0 h-full right-0 transition-transform ease-in-out duration-500 w-[80%] sm:w-1/2 lg:w-2/5 bg-white shadow-lg p-4'>
            <div className='bg-white'>
                <h2 className='font-semibold text-lg'>Responses(163)</h2>
                <div className='flex gap-2 items-center mt-12'>
                    <img src="https://avatar.iran.liara.run/public/boy" className='profile w-8 h-8' />
                    <span className='text-sm'>Ritesh</span>
                </div>
                <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit} className='bg-slate-100 relative p-2 h-36 mt-3'>
                    <textarea onChange={handleChange} name="comment" value={comment.comment} className='text-black/50 text-sm w-full h-4/5 outline-none ' placeholder='What are your thoughts' />
                    <input type="submit" value={"Respond"} className='absolute bottom-3 right-3 btn p-1 text-sm px-2 bg-green-600'/>
                </form>
            </div>
            <div className='mt-2 flex flex-col gap-5'>
                {
                    commentArr?.map((ele: commentInterface, index: number) => (
                        <div className='' key={index}>
                            <UserDiv owner={ele.user} />
                            <div className='p-1 text-sm'>
                                <p>{ele.comment}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
  )
}

export default DisplayComment