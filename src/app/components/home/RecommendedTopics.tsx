import { getTopics } from '@/app/actions/post.actions'
import React from 'react'

const RecommendedTopics = async () => {

  const arr = await getTopics()
  console.log(arr)

  return (
    <div>
        <h3 className='side-title mt-5'>Recommended Topics</h3>
        <div className='flex gap-2 flex-wrap '>
          {
            arr.map((ele: any, index: number) => (
              <span className='bg-slate-100 px-4 py-2 text-sm rounded-3xl' key={index}>
                {ele}
              </span>
            ))
          }
        </div>
    </div>
  )
}

export default RecommendedTopics