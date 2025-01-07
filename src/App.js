import React from 'react';
import Navbar from "./Navbar.jsx"
import HeroSection from './HeroSection.jsx';
import Greetings from './Greetings.jsx';

export default function MainPage() {
  return (
    <>
    <Greetings />
    <Navbar/>
    <HeroSection/>
    </>
  );
}
