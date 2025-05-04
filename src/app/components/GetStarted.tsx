"use client"

import React, { useState } from 'react'

const GetStarted = ({handleClick}: {handleClick: () => void}) => {

    const [signUp, setSignUp] = useState(true) 


  return (
    <section className='absolute top-0 left-0 right-0 bottom-0 bg-white/90'>
        <div className="absolute top-0 bottom-0 left-0 right-0 sm:left-28 sm:right-28 bg-white shadow-2xl">
        </div>
    </section>
  )
}

export default GetStarted