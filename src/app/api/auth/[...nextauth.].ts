import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", placeholder: "Username"},
                password: {label: "Password", placeholder: "Password"}
            },
            async authorize(credentials: any){
                return {
                    id: "User1"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}