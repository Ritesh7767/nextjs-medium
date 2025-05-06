import React from 'react'

const LandingFooter = () => {
  return (
    <footer className='bg-black border border-black text-white py-5 px-6 lg:bg-inherit'>
      <div className="">
        <nav className='lg:hidden flex gap-4 text-sm text-white/80'>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </nav>
        <nav className='hidden lg:flex justify-center gap-4 text-sm text-black/80'>
          <a href="#">Help</a>
          <a href="#">Status</a>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Rules</a>
          <a href="#">Terms</a>
          <a href="#">Text to speech</a>
        </nav>
      </div>
    </footer>
  )
}

export default LandingFooter