import React from 'react'
import UserDiv from '../UserDiv'
import CardFooter from './CardFooter'
import { postInterface } from '../home/AllPost'
import Link from 'next/link'

const RecommendedCard = ({ele}: {ele: postInterface}) => {

  const {title, subtitle, image, createAt, owner, _count, id} = ele
    const {Likes, Comment} = _count
    
    const date = new Date(createAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
    })

  return (
    <Link href={`/post?id=${id}`} className='flex flex-col gap-4'>
      {image && <img alt='' src={image} className='w-full h-52 rounded-md' />}
      {owner && <div>
        <UserDiv owner={owner} />
      </div>}
      <h2 className='post-title'>{title}</h2>
      <h3 className='post-subtitle'>{subtitle}</h3>
      <CardFooter date={date} Likes={Likes} Comment={Comment}/>
    </Link>
  )
}

export default RecommendedCard