import Link from 'next/link'
import React from 'react'

const Navigator = () => {
  return (
    <div className='flex gap-8 text-black/70 py-6 px-7 '>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About</Link>
    </div>
  )
}

export default Navigator