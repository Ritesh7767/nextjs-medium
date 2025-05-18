import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import AuthIcons from './AuthIcons'
import { SiApple } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'

const Signin = ({handleEmail}: {handleEmail: () => void}) => {
  return (
    <>
        <h2 className='auth-title mt-24'>Welcome back</h2>
        <div className='mt-20 flex flex-col gap-3'>
            <AuthIcons Icon={FcGoogle} authName='Sign in Google' />
            <AuthIcons Icon={FaFacebook} authName='Sign in Facebook' />
            <AuthIcons Icon={SiApple} authName='Sign in Apple' />
            <AuthIcons Icon={FaXTwitter} authName='Sign in X' />
            <div onClick={handleEmail}>
              <AuthIcons Icon={AiOutlineMail} authName='Sign in email' />
            </div>
        </div>
    </>
  )
}

export default Signin