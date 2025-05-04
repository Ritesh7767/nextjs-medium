"use client"

import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingPage from "./components/LandingHero";
import LandingNav from "./components/LandingNav";
import GetStarted from "./components/GetStarted";
import { useState } from "react";

export default function Home() {

  const [getStarted, setGetStarted] = useState(false)
  const handleClick = () => setGetStarted(!getStarted)
  return (
    <div className="relative">
      <LandingNav handleClick={handleClick}/>
      <LandingHero/>
      <LandingFooter/>
      {getStarted && <GetStarted handleClick={handleClick} />}
    </div>
  );
}
