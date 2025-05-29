import { randomUser } from '@/app/actions/user.actions'
import React from 'react'

const RecommendedUser = async () => {
    const data = await randomUser()

  return (
    <section>
        <div>
            <h2 className='side-title mt-5'>Who to follow</h2>
            <div>
                {
                    data.map((ele, index) => (
                        <div key={index} className='flex gap-1 items-start'>
                            <img src={ele.profile} alt="" className='w-7 h-7 rounded-full' />
                            <div className='flex flex-col gap-1'>
                                <span className='font-bold text-sm'>{ele.firstname + " " + ele.lastname}</span>
                                <span className='text-xs font-medium text-black/65'>{ele.about}</span>
                            </div>
                            <button>Follow</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default RecommendedUser