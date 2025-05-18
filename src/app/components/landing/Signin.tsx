import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Input from './Input'
import Cross from './Cross'
import { useRouter, redirect } from 'next/navigation'

const Signin = ({handleEmail}: {handleEmail: () => void}) => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const router = useRouter()

  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(credentials)
    e.preventDefault()
    const result = await signIn("credentials", {
      ...credentials, 
      redirect: false,
      // callbackUrl: "/main"
    })  
    console.log(result)
    if (result?.ok) router.push("/main")

    if (result?.error) setError(result.error)
    console.log(error)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  console.log(credentials)
  return (
    <div className='get-container'>
        <h2 className='auth-title mt-36'>Sign in with email</h2>
        <div className='mt-12 text-center'>
          <form onSubmit={handleSubmit} className='w-2/5 m-auto' >
            <Input name='username' type='text' handleChange={handleChange as () => void} />
            <Input name='password' type='password' handleChange={handleChange as () => void} />
            <input type="submit" value={"Continue"} className='btn px-16 mt-8' />
          </form>
          <div className='flex justify-center items-center gap-2 text-green-600 mt-8'>
            <MdOutlineKeyboardArrowLeft className='text-2xl font-thin' />
            <span onClick={handleEmail} className='cursor-pointer' > All sign up options</span>
          </div>
        </div>
        <div className='disclaimer-container'>
          <p className='text-black/60'>This site is protected by reCAPTCHA Enterprise and the <span>Google Privacy Policy</span> and <span>Terms of Service</span>apply</p>
        </div>
        <Cross handleClick={handleEmail} />
    </div>
  )
}

export default Signin