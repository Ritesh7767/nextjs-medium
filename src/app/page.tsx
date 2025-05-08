'use client'

import { useState } from "react";
import LandingNav from "./components/landing/LandingNav";
import LandingHero from "./components/landing/LandingHero";
import GetStarted from "./components/landing/GetStarted";
import LandingFooter from "./components/landing/LandingFooter";

export default () => {
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
