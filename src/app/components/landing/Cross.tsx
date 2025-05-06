import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Cross = ({handleClick}: {handleClick: () => void}) => {
  return (
    <RxCross2 className='absolute top-5 right-5 text-2xl cursor-pointer ' onClick={handleClick}/>
  )
}

export default Cross