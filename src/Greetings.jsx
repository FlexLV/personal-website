// src/Greetings.jsx
import React, { useState, useEffect } from 'react';
import './Greetings.css';
import greetingsList from './greetings';

const Greetings = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const totalGreetings = greetingsList.length;
  const [bgAnimation, setBgAnimation] = useState('');

  useEffect(() => {
    // Duration settings
    const slideDuration = 1000; // 1 second for background animation
    const displayDuration = 5000; // 2 seconds for showing the greeting

    // Timer to start slide-in after displayDuration
    const displayTimeout = setTimeout(() => {
      setBgAnimation('background-slide-in');

      // After slide-in completes, wait for slideDuration then change greeting
      const slideInTimeout = setTimeout(() => {
        if (current < totalGreetings - 1) {
          setCurrent(prev => prev + 1);
          setBgAnimation('background-slide-out');

          // After slide-out completes, remove the animation class
          const slideOutTimeout = setTimeout(() => {
            setBgAnimation('');
          }, slideDuration);

          // Cleanup slideOutTimeout if component unmounts
          return () => clearTimeout(slideOutTimeout);
        } else {
          // If all greetings have been displayed, finish
          onFinish();
        }
      }, slideDuration);

      // Cleanup slideInTimeout if component unmounts
      return () => clearTimeout(slideInTimeout);
    }, displayDuration);

    // Cleanup displayTimeout if component unmounts or current changes
    return () => {
      clearTimeout(displayTimeout);
    };
  }, [current, totalGreetings, onFinish]);

  return (
    <div className="greetings-app">
      {/* Background Overlay */}
      <div className={`background-overlay ${bgAnimation}`}></div>

      {/* Greeting Content */}
      <div className="greeting-container">
        <h1>{greetingsList[current]}</h1>
        {/* If you have a <p> element, you can include it here */}
        {/* <p>Subtext or additional information</p> */}
      </div>
    </div>
  );
};

export default Greetings;
