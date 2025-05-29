import React from 'react'
import landingImage from '@/assets/landingImage.webp'

const LandingHero = () => {
  return (
    <section className='overflow-x-clip'>
      <div className="m-auto">
        <div className='w-full h-[80vh] lg:flex lg:justify-between'>
          <div className='px-6 h-full w-full lg:w-4/5 md:px-10 flex flex-col justify-center items-start'>
            <h1 className='font-serif text-7xl leading-16 md:text-8xl md:leading-20 mt-28'>Human <br /> stories & ideas</h1>
            <p className='text-3xl  mt-12'>A place to read, write, and deepen your understanding</p>
            <button className='btn mt-12 mb-8 px-9 py-3 md:text-xl md:px-12 md:bg-green-600'>Start reading</button>
          </div>
          <div className='hidden lg:block lg:flex-1 relative'>
            <img src={landingImage.src} alt='image' className='absolute h-full lg:-left-28 -top-9 lg:max-w-none lg:w-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero