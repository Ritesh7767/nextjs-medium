import React from 'react'
import LandingFooter from "../components/landing/LandingFooter";
import LandingHero from "../components/landing/LandingHero";
import LandingNav from "../components/landing/LandingNav";
import GetStarted from "../components/landing/GetStarted";
import { useState } from "react";


const LandingPage = () => {
    const [getStarted, setGetStarted] = useState(false)
    const handleClick = () => setGetStarted(!getStarted)

    return (
        <div className="relative max-h-screen lg:min-h-screen  flex flex-col">
        <main className="flex-grow">
            <LandingNav handleClick={handleClick}/>
            <LandingHero/>
        </main>
        {getStarted && <GetStarted handleClick={handleClick} />}
        <LandingFooter/>
        </div>
    );
}

export default LandingPage