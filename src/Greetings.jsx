// src/Greetings.jsx
import React, { useState, useEffect } from 'react';
import './Greetings.css';
import greetingsList from './greetings';

const Greetings = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const totalGreetings = greetingsList.length;
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    // Duration settings
    const displayDuration = 2500; // Total duration per greeting (2.5 seconds)
    const fadeDuration = 500;     // Duration for fade-out (0.5 seconds)

    const timeout1 = setTimeout(() => {
      setAnimationClass('fade-out');
    }, displayDuration - fadeDuration); // Stardadwt fade-out 0.5s before the end

    const timeout2 = setTimeout(() => {
      if (current < totalGreetings - 1) {
        setCurrent(current + 1);
        setAnimationClass('fade-in');
      } else {
        // All greetings have been displayed; proceed to main content
        onFinish();
      }
    }, displayDuration); // Change greeting after displayDuration

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [current, totalGreetings, onFinish]);

  return (
    <div className="greetings-app">
      <div className={`greeting-text ${animationClass}`}>
        {greetingsList[current]}
      </div>
    </div>
  );
};

export default Greetings;
