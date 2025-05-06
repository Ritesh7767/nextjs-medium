'use server'
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
    lastname: string
}

export const register = async (data: FormData) => {
    const userData: userDataInterface = {
        profile: "",
        username: "",
        email: "",
        password: "",
        firstname: "" ,
        lastname: "",
    }

    
    for(let key in userData){
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

    const user = await prisma.user.create({data: userData})
    console.log(user)
    redirect("/")
}

// export const getUser = await 