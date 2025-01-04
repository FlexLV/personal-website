// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion'; 
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-container">
      

      <motion.div
        className="avatar-bubble"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="/path/to/binil-avatar.png" 
          alt="Binil's Avatar" 
          className="avatar-image" 
        />
        <div className="speech-bubble">Hello, I’m Ernests</div>
      </motion.div>

      
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        SOFTWARE<br/>
        DEVELOPER<br/>
        &amp; WEB  DEVELOPER
      </motion.h1>

      <motion.div
        className="labels"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="label product">Product</span>
        <span className="label location">Based in Riga, Latvia</span>
        <span className="label connect">Let’s Connect</span>
      </motion.div>

    </div>
  );
}
