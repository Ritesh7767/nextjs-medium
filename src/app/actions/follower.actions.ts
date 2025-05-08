import { prisma } from "@/lib/prisma/prisma"
import { sessionValidator } from "@/lib/sessionValidator"

export const getFollowings = async (id: string) => {
    // await sessionValidator()
    let data =  await prisma.follower.findMany({
        where: {
            followingId: id
        },
        select: {
            follower: {
                select: {
                    profile: true,
                    firstname: true,
                    lastname: true
                }
            }
        }
    })
    
    let result = data.flatMap(f => f.follower)
    return result
    
}