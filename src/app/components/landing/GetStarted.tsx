"use client"

import React, { useState } from 'react'
import SignupOptions from './SignupOptions'
import SigninOptions from './SigninOptions'
import Signin from './Signin'
import Signup from './Signup'
import Cross from './Cross'

const GetStarted = ({handleClick}: {handleClick: () => void}) => {

    const [signUp, setSignUp] = useState(true) 
    const [email, setEmail] = useState(false)

    const handleEmail = () => setEmail(!email)

  return (
    <section className='absolute top-0 left-0 right-0 bottom-0 bg-white/90'>
        <div className="absolute top-0 bottom-0 left-0 right-0 sm:left-28 sm:right-28 bg-white shadow-2xl">
          {signUp ? <SignupOptions handleEmail={handleEmail} /> :<SigninOptions handleEmail={handleEmail}/>}
          <p className='text-center mt-10'>{signUp ? "Already have an account?": "Create Account"} <span onClick={() => setSignUp(!signUp)} className='font-bold text-green-700 cursor-pointer'>Sign {signUp ? "in": "up"}</span></p>
          <div className='disclaimer-container'>
            <p className='text-black/60'>
              Click &quot;Sign up&quot; to agree to Medium&#39;s <span className="underline">Terms of Service</span> and acknowledge that Medium&#39;s <span className="underline">Privacy Policy</span> applies to you
            </p>
          </div>
          {email &&  (signUp ? <Signup handleEmail={handleEmail} />: <Signin handleEmail={handleEmail}/>)}
          <Cross handleClick={handleClick} />
        </div>
    </section>
  )
}

export default GetStarted