import { prisma } from "@/lib/prisma"

interface userDataInterface {
    [keyof: string]: string,
    profile: string,
    username: string,
    email: string,
    password: string,
    fullname: string,
    gender: "Male" | "Female" | "Others" | "None"
}

export const register = async (data: FormData) => {
    "user server"
    const userData: userDataInterface = {
        profile: "",
        username: "",
        email: "",
        password: "",
        fullname: "",
        gender: "None"
    }

    for(let key in userData){
        userData[key] = data.get(key)?.valueOf() as string
    }

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

    return user
}

export const login = async (data: FormData) => {
    
}