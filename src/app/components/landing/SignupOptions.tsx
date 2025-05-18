import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import AuthIcons from './AuthIcons'

const SignupOptions = ({handleEmail}: {handleEmail: () => void}) => {
  return (
    <>
        <h2 className='auth-title mt-32'>Join Medium</h2>
        <div className='mt-20 flex flex-col gap-3'>
            <AuthIcons Icon={FcGoogle} authName='Sign up Google' />
            <AuthIcons Icon={FaFacebook} authName='Sign up Facebook' />
            <div onClick={handleEmail} >
              <AuthIcons Icon={AiOutlineMail} authName='Sign up email' />
            </div>
        </div>
    </>
  )
}

export default SignupOptions