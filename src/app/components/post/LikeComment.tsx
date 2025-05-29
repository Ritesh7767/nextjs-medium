'use client'

import React, { useState } from 'react'
import { PiHandsClappingThin } from 'react-icons/pi'
import { TfiComment } from 'react-icons/tfi'
import { likePost} from '@/app/actions/like.actions'
import { FaHandsClapping } from 'react-icons/fa6'
import DisplayComment from './DisplayComment'

const LikeComment = ({like, comment, id}: {like: number, comment: number, id: string}) => {

    const [likeComment, setLikeComment] = useState<{like: number, comment: number}>({like, comment})
    const [clapped, setClapped] = useState(false)
    const [displayComment, setDisplayComment] = useState(false)
    const handleClick = async () => {
        setClapped(true)
        const response = await likePost(id)
        if(response) setLikeComment(prev => ({...prev, like: prev.like + 1}))
    }

    const handleComment = () => setDisplayComment(!displayComment)

  return (
    <>
        <div className="flex gap-1 items-center cursor-pointer">
            {clapped ? <FaHandsClapping/> : <PiHandsClappingThin className='cursor-pointer bg-black bg-clip-text ' onClick={handleClick}/>}
            <span>{likeComment.like}</span>
        </div>
        <div className="flex gap-1 items-center cursor-pointer" onClick={handleComment}>
            <TfiComment className="" />
            <span>{likeComment.comment}</span>
        </div>
        <DisplayComment postId={id} displayComment={displayComment} handleComment={handleComment}/>
    </>
  )
}

export default LikeComment