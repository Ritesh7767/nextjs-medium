'use server'
import { sessionValidator } from "@/lib/sessionValidator"
import { prisma } from "@/lib/prisma/prisma"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

export interface userDataInterface {
    [keyof: string]: string,
    profile: string,
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    about: string
}

export const register = async (data: FormData) => {
    const userData: userDataInterface = {
        profile: "",
        username: "",
        email: "",
        password: "",
        firstname: "" ,
        lastname: "",
        about: ""
    }

    
    for(const key in userData){
        userData[key] = data.get(key) as string
    }
    
    userData.profile = `https://avatar.iran.liara.run/username?username=${userData.firstname}+${userData.lastname}`
    userData.password = await bcrypt.hash(userData.password, 5)

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                { username: userData.username },
                { email: userData.email }
            ]
        }
    })

    if(existingUser) throw new Error("User already exists")

    await prisma.user.create({data: userData})
    redirect("/")
}

export const getAllUser = async (firstname: string) => {
    await sessionValidator()
    return await prisma.user.findMany({
        where: {
            firstname
        },
        select: {
            id: true,
            profile: true,
            firstname: true,
            lastname: true
        }
    })
}

export const getUser = async (id: string) => {

    await sessionValidator()
    return await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
               profile: true,
            username: true,
            firstname: true,
            lastname: true,
            about: true,
            _count: {
                select: {
                    Followers: true
                }
            }
        }
    })
}

export const randomUser = async () => {
    await sessionValidator()
    return await prisma.user.findMany({
        take: 3,
        select: {
            id: true,
            profile: true,
            firstname: true,
            lastname: true,
            about: true
        }
    })
}