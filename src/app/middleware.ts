import { getToken } from "next-auth/jwt";
import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware (req: NextRequest) {
    const token = getToken({req, secret: process.env.NEXTAUTH_SECRET})

    const pathname = req.nextUrl.pathname
    console.log(pathname)
    if (!token) NextResponse.redirect(new URL("/", req.url))

    NextResponse.next()
}