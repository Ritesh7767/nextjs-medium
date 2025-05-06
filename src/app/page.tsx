"use client"

import { signOut, useSession } from "next-auth/react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

export default function Home() {

  // const session = useSession()
  // console.log(session)

  return (
    <>
      {/* {session.status == "authenticated" ? <HomePage/> : <LandingPage/>} */}
      <HomePage/>
    </>
  )
  
}
