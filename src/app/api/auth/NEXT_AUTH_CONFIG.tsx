import { prisma } from "@/lib/prisma/prisma";
import { userLoginValidation } from "@/lib/zod/user.zod";
import { DefaultSession, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            id: string
        } & DefaultSession["user"]
    }
}

const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", placeholder: "Username"},
                password: {label: "Password", placeholder: "Password"}
            },
            async authorize(credentials){

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
        jwt: async ({user, token}: {user: User, token: JWT}) => {
            if (user) {
                token.uid = user.id
            }
            return token
        },
        session: async ({session, token}: {session: Session, token: JWT}) => {
            if (session.user){
                session.user.id = token.uid as string
            }
            return session
        }
    }
}

export default NEXT_AUTH_CONFIG