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
            owner: {
                select: {
                    profile: true,
                    firstname: true,
                    lastname: true
                }
            },
            _count: {
                select: {
                    Likes: true,
                    Comment: true
                }
            }
        }
    })
}

export const getUserPost = async (id: string, take?: number | undefined) => {
    await sessionValidator()
    return await prisma.post.findMany({
        where: {
            ownerId: id
        },
        take: take ? take : 10,
        select: {
            id: true,
            title: true,
            subtitle: true,
            image: true,
            createAt: true,
            _count: {
                select: {
                    Likes: true,
                    Comment: true
                }
            },
        }
    })
}

export const getAllPost = async () => {
    await sessionValidator()
    const posts = await prisma.post.findMany({
        take: 10,
        select: {
            id: true,
            title: true,
            subtitle: true,
            image: true,
            createAt: true,
            owner: {
                select: {
                    id: true,
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

export const staffPick = async () => {
    return await prisma.post.findMany({
        take: 3,
        select: {
            id: true,
            title: true,
            createAt: true,
            owner: {
                select: {
                    profile: true,
                    firstname: true,
                    lastname: true
                }
            }
        }
    })
}


export const getTopics = async () => {
    await sessionValidator()
    const allPost = await prisma.post.findMany({
        select: {
            topic: true
        }
    })

    let topics =  new Set()

    for(let ele of allPost){
        const {topic} = ele
        topics.add(topic)
    }
    let arr = []

    for(let ele of topics){
        arr.push(ele)
    }
    return arr
}

export const getRecommendation = async () => {
    return await prisma.post.findMany({
        take: 4,
        select: {
            id: true,
            title: true,
            subtitle: true,
            image: true,
            createAt: true,
            owner: {
                select: {
                    id: true,
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
        }
    })
}