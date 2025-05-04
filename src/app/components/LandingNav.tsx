import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/mediumLogo.jpg'

const LandingNav = ({handleClick}: {handleClick: () => void}) => {
  return (
    <header className='border'>
      <div className="m-auto border border-black px-5 md:px-7">
        <div className='flex items-center justify-between'>
          <Image src={Logo} alt='medium-logo' className='w-36' />
          <nav >
            <nav className='flex items-center gap-8'>
              <div className='hidden md:flex gap-8'>
                <a href={"#"} className=''>Our story</a>
                <a href={"#"} className=''>Membership</a>
                <a href={"#"} className=''>Write</a>
              </div>
              <a href={"#"} className='hidden sm:block' >Sign in</a>
              <button className='btn' onClick={handleClick} >Get started</button>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default LandingNav