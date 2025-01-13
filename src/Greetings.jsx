// src/Greetings.jsx
import React, { useState, useEffect } from 'react';
import './Greetings.css';
import greetingsList from './greetings';

const Greetings = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const totalGreetings = greetingsList.length;

  // We’ll track which "phase" we’re in: 
  // - "fadeInFirst" for the first greeting
  // - "slideInOut" for intermediate greetings
  // - "slideUp" for after the last greeting
  const [phase, setPhase] = useState('fadeInFirst');

  // We use these durations (in ms) to schedule transitions
  const fadeInDuration = 1000;   // 1s fade in for first greeting
  const holdDuration = 1500;     // 1.5s we hold the greeting on screen
  const transitionDuration = 1000; // 1s for any slide transitions
  const finalSlideUpDuration = 1000; // 1s for the final page slide-up

  useEffect(() => {
    if (phase === 'fadeInFirst') {
      // 1) Fade in the first greeting, hold it, then move to the next greeting
      const timer = setTimeout(() => {
        // Move to the second greeting
        if (current < totalGreetings - 1) {
          setCurrent(prev => prev + 1);
          setPhase('slideInOut'); 
        } else {
          // If there's only 1 greeting in your list, jump to final
          setPhase('slideUp');
        }
      }, fadeInDuration + holdDuration);

      return () => clearTimeout(timer);

    } else if (phase === 'slideInOut') {
      // 2) For greetings #2..#(n-1):
      //    Show a "slide in" or mild fade, hold, then move to next greeting
      const timer = setTimeout(() => {
        if (current < totalGreetings - 1) {
          setCurrent(prev => prev + 1);
        } else {
          // After last greeting is shown, do final slide up
          setPhase('slideUp');
        }
      }, transitionDuration + holdDuration);

      return () => clearTimeout(timer);

    } else if (phase === 'slideUp') {
      // 3) Slide the entire screen up and then trigger onFinish
      const timer = setTimeout(() => {
        onFinish(); 
      }, finalSlideUpDuration);

      return () => clearTimeout(timer);
    }
  }, [
    phase,
    current,
    totalGreetings,
    onFinish,
    fadeInDuration,
    holdDuration,
    transitionDuration,
    finalSlideUpDuration
  ]);

  return (
    <div className={`greetings-app ${phase === 'slideUp' ? 'page-slide-up' : ''}`}>
      <div className="greeting-container">
        <h1
          className={
            phase === 'fadeInFirst' && current === 0
              ? 'fade-in-first'
              : phase === 'slideInOut'
              ? 'slide-in-out'
              : ''
          }
        >
          {greetingsList[current]}
        </h1>
      </div>
    </div>
  );
};

export default Greetings;
