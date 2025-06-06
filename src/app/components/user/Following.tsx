import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { ownerInterface } from '../home/AllPost'
import UserDiv from '../UserDiv'

const Following = ({data}: {data: ownerInterface[]}) => {
  return (
    <div className='mt-6'>
        <h3 className='side-title'>Following</h3>
        <div className='mt-4 flex flex-col gap-2'>
            {
                data.map((ele: ownerInterface, index: number) => (

                    <div className='pr-32 relative' key={index}>
                        <UserDiv owner={ele} />
                        <BsThreeDots className='text-xl absolute right-2 top-0'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Following