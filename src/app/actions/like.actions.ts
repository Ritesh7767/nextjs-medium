'use server'

import { prisma } from "@/lib/prisma/prisma"
import { sessionValidator } from "@/lib/sessionValidator"

export const likePost = async (id: string) => {
    
    const session = await sessionValidator()
    const alreadyLike = await prisma.like.findFirst({
        where: {
            postId: id,
            userId: session.user.id
        }
    })
    if (alreadyLike) return false 
    
    const createEntry = await prisma.like.create({
        data: {
            postId: id,
            userId: session.user.id
        }
    })
    
    return true
}