import React from 'react'
import { FaComment, FaPlus } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'

const CardFooter = ({date, Likes, Comment}: {date: string, Likes: number, Comment: number}) => {
  return (
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
  )
}

export default CardFooter