// src/Greetings.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Greetings.css'; // Import the CSS for Greetings
import greetingsList from './greetings.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Greetings = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Create a ref for the transitioning element
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % greetingsList.length);
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isPaused]);

  return (
    <div
      className="greetings-app"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="greeting-container">
        <TransitionGroup>
          <CSSTransition
            key={greetingsList[current].lang}
            timeout={500}
            classNames="fade"
            nodeRef={nodeRef} // Pass the nodeRef here
          >
            {/* Assign the ref to the child div */}
            <div ref={nodeRef}>
              <h1>{greetingsList[current].text}</h1>
              <p>{greetingsList[current].lang}</p>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Greetings;
