'use server'

import { prisma } from "@/lib/prisma/prisma"
import { sessionValidator } from "@/lib/sessionValidator"

export const follow = async (id: string) => {
    const session = await sessionValidator()

    const isAlreadyFollowing = await prisma.follower.findFirst({
        where: {
            followerId: session.user.id,
            followingId: id
        }
    })
    if (isAlreadyFollowing) return true

    await prisma.follower.create({
        data: {
            followerId: session.user.id,
            followingId: id
        }
    })
    
    return true
}

export const unFollow = async (id: string) => {
    const session = await sessionValidator()

    await prisma.follower.delete({
        where: {
            followerId_followingId: {
                followerId: session.user.id,
                followingId: id
            }
        }
    })

    return false
}

export const isFollowing = async (id: string) => {

    const session = await sessionValidator()
    const result = await prisma.follower.findUnique({
        where: {
            followerId_followingId: {
                followerId: session.user.id,
                followingId: id
            }
        }
    })
    if (result) return true
    return false
}

export const getFollowings = async (id: string) => {
    await sessionValidator()
    const data =  await prisma.follower.findMany({
        where: {
            followingId: id
        },
        select: {
            follower: {
                select: {
                    id: true,
                    profile: true,
                    firstname: true,
                    lastname: true
                }
            }
        }
    })
    
    const result = data.flatMap(f => f.follower)
    return result
}