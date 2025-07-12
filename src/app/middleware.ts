import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware (req: NextRequest) {
    const token = getToken({req, secret: process.env.NEXTAUTH_SECRET})

    if (!token) NextResponse.redirect(new URL("/", req.url))

    NextResponse.next()
}