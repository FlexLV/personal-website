import React from 'react';
import HeroSection from "./HeroSection.jsx"
import Navbar from "./Navbar.jsx"
import Footerline from "./FooterLine.jsx";
import WhatIDo from "./WhatIDo.jsx"
import Projects from "./Projects.jsx"
import TechStack from './TechStack.jsx';

const MainContent = () => {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
        <Footerline />
        <WhatIDo/>
        <Projects />
        <TechStack />
    </div>
  );
};

export default MainContent;
