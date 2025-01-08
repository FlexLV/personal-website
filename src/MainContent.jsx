// src/MainContent.jsx
import React from 'react';
import HeroSection from "./HeroSection.jsx"
import Navbar from "./Navbar.jsx"


const MainContent = () => {
  return (
    <div >
        <Navbar/>
        <HeroSection/>
    </div>
  );
};

export default MainContent;
