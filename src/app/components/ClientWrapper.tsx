"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const ClientWrapper = () => {

    const {status} = useSession()

  return (
    <div>ClientWrapper</div>
  )
}

export default ClientWrapper