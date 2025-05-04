import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { RxCross2 } from 'react-icons/rx'

const RegisterLogin = ({signUp, handleClick}: {signUp: boolean, handleClick: () => void}) => {

  return (
    <>
        {signUp ? <Signup/> :<Signin/>}
        {/* <p className='text-center mt-10'>Already have an account? <span onClick={() => setSignUp(!signUp)} className='font-bold text-green-700'>Sign {signUp ? "in": "up"}</span></p> */}
        <div className='mt-28 w-1/2 m-auto text-center text-sm'>
            <p className='text-black/60'>
                Click "Sign up" to agree to Medium's <span className='underline'>Terms of Service</span> and acknowledge that Medium's <span className='underline'>Privacy Policy</span> applies to you
            </p>
        </div>
        <RxCross2 className='absolute top-5 right-5 text-2xl' onClick={handleClick}/>
    </>
  )
}

export default RegisterLogin