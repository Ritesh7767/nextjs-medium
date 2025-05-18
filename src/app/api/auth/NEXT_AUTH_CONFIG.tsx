import { prisma } from "@/lib/prisma/prisma";
import { userLoginValidation, userRegisterValidation } from "@/lib/zod/user.zod";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", placeholder: "Username"},
                password: {label: "Password", placeholder: "Password"}
            },
            async authorize(credentials: any){

                if (!credentials) return null

                const {username, password} = credentials
                const credentialValidation = userLoginValidation.safeParse({username, password})
                if (!credentialValidation.success) throw new Error(credentialValidation.error.message)
                
                const user = await prisma.user.findUnique({
                    where: {
                        username
                    }
                })
                if (!user) return null
                return {
                    id: user.id,
                    profile: user.profile,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({user, token}: any) => {
            if (user) {
                token.uid = user.id
            }
            return token
        },
        session: async ({user, session, token}: any) => {
            if (session.user){
                session.user.id = token.uid
                // session.user.profile = 
                // session.user.username = user.username
            }
            return session
        }
    }
}

export default NEXT_AUTH_CONFIG