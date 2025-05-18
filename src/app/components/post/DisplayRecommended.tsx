import React from 'react'
import { postInterface } from '../home/AllPost'
import RecommendedCard from './RecommendedCard'

const DisplayRecommended = ({posts, title}: {posts: postInterface[], title: string}) => {
  return (
    <div>
        <h2 className='font-medium text-lg mb-2 mt-10' >More from {title} </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
                posts.map((ele: postInterface, index: number) => <RecommendedCard ele={ele} key={index}/>)
            }
        </div>
    </div>
  )
}

export default DisplayRecommended