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
        if (response) setFollowing(true)
      }
    )()
  }, [])

  const handleClick = async () => {
    let response;
    try {
      if (following){
        response = await unFollow(id)
      } else {
        response = await follow(id)
      }
      setFollowing(response)
    } catch (error) {
      console.error(error)
      setFollowing(following)
    }
  }


  return (
    <button onClick={handleClick} className={twMerge(className, following && "border border-green-800 text-green-800 bg-white")}>{following ? "following": "follow"}</button>
  )
}

export default FollowBtn