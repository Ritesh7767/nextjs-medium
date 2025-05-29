'use client'

import { follow, isFollowing, unFollow } from '@/app/actions/follower.actions'
import React, { useEffect, useState } from 'react'
import {twMerge} from 'tailwind-merge'

const FollowBtn = ({className, id}: {className?: string, id: string}) => {
  
  const [following, setFollowing] = useState(false)

  useEffect(() => {
    (
      async () => {
        const response = await isFollowing(id)
        console.log(response)
        if (response) setFollowing(true)
      }
    )()
  }, [])

  const handleClick = async () => {
    console.log("clicked")
    let response;
    try {
      if (following){
        response = await unFollow(id)
      } else {
        response = await follow(id)
      }
      console.log(response)
      setFollowing(response)
      console.log(response)
    } catch (error) {
      console.log(error)
      setFollowing(following)
    }
  }


  return (
    <button onClick={handleClick} className={twMerge(className, following && "border border-green-800 text-green-800 bg-white")}>{following ? "following": "follow"}</button>
  )
}

export default FollowBtn