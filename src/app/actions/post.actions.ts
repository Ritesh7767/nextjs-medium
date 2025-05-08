'use server'
import cloudinary from "@/lib/cloudinary/cloudinary"
import { prisma } from "@/lib/prisma/prisma"
import { sessionValidator } from "@/lib/sessionValidator"
import { postValidator } from "@/lib/zod/post.zod"

export const getPost = async (id: string) => {
    await sessionValidator()
    return prisma.post.findUnique({
        where: {
            id
        }, 
        include: {
            _count: {
                select: {
                    Likes: true,
                    Comment: true
                }
            }
        }
    })
}

export const getAllPost = async () => {
    const posts = await prisma.post.findMany({
        select: {
            title: true,
            subtitle: true,
            image: true,
            createAt: true,
            owner: {
                select: {
                    profile: true,
                    firstname: true,
                    lastname: true,
                    about: true,
                    _count: {
                        select: {
                            Followers: true
                        }
                    }
                }
            },
            _count: {
                select: {
                    Likes: true,
                    Comment: true
                }
            },
        },
        
    })
    return posts 
}

export const getFollowerPost = async () => {
    const session  = await sessionValidator()

    const followersPost = await prisma.follower.findMany({
        where: {
            followerId: session.user.id
        },
        select: {
            following: {
                select: {
                    Post: {
                        select: {
                            title: true,
                            subtitle: true,
                            topic: true,
                            image: true,
                            createAt: true,
                            _count: {
                                select: {
                                    Likes: true,
                                    Comment: true
                                }
                            },
                            owner: {
                                select: {
                                    profile: true,
                                    firstname: true,
                                    lastname: true,
                                    about: true,
                                    _count: {
                                        select: {
                                            Followers: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    const finalData = followersPost.flatMap(f => f.following.Post)
    return finalData
}

export const createPost = async (data: FormData) => {
    
    const session = await sessionValidator()
    const rawData: Record<string, unknown> = {}

    for(let key of data.keys()){
        if (key !== "image") rawData[key] = data.get(key)
    }

    const result = postValidator.safeParse(rawData)
    if (!result.success){
        console.log(result.error.message)
        throw new Error(result.error.message)
    }

    const postData = result.data

    const file = data.get("image") as File | null
    let imageUrl = ""
    
    if (file && typeof file === "object") {
        const bytes = await file?.arrayBuffer() as ArrayBuffer
        const buffer = Buffer.from(bytes)
        const upload = await new Promise<{secure_url: string}>((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "posts"
                },
                (error, result) => {
                    if (error) reject(error)
                    resolve({secure_url: result?.secure_url as string})
                }
            )
            stream.end(buffer)
        })
        imageUrl = upload.secure_url    
    }
    return await prisma.post.create({
        data: {
            title: postData.title,
            subtitle: postData.subtitle,
            topic: postData.topic,
            content: postData.content,
            image: imageUrl,
            ownerId: session.user.id
        }
    })
}