'use server'

import { prisma } from "@/lib/prisma/prisma"
import { sessionValidator } from "@/lib/sessionValidator"

export const registerComment = async ({postId, comment}: {postId: string, comment: string}) => {

    const session = await sessionValidator()
    await prisma.comment.create({
        data: {
            postId,
            comment,
            userId: session.user.id
        }
    })
    return getComments(postId)  
}

export const getComments = async (postId: string) => {
    return await prisma.comment.findMany({
        where: {postId},
        select: {
            comment: true,
            user: {
                select: {
                    id: true,
                    profile: true,
                    firstname: true,
                    lastname: true
                }
            },
        }
    })
}