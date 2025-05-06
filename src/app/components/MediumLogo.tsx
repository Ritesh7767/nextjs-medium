import mediumLogo from '@/assets/mediumLogo.jpg'
import Image from 'next/image'
import React from 'react'

const MediumLogo = () => {
  return (
    <Image src={mediumLogo} alt="medium logo" className='w-28 h-16' />

  )
}

export default MediumLogo