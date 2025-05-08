'use server'

import NEXT_AUTH_CONFIG from "@/app/api/auth/NEXT_AUTH_CONFIG"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const sessionValidator = async () => {
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    
    if (!session) redirect("/")

    return session

}