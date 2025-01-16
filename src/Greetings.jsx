import React, { useState, useEffect } from 'react';
import './Greetings.css';
import greetingsList from './greetings';

const Greetings = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const totalGreetings = greetingsList.length;
  const [phase, setPhase] = useState('fadeInFirst');

  const firstFadeDuration = 1500;
  const otherFadeDuration = 250;
  const slideUpDuration = 1000;

  useEffect(() => {
    if (phase === 'fadeInFirst') {
      const timer = setTimeout(() => {
        if (current < totalGreetings - 1) {
          setCurrent(prev => prev + 1);
          setPhase('fadeInOthers');
        } else {
          setPhase('slideUp');
        }
      }, firstFadeDuration);
      return () => clearTimeout(timer);
    } else if (phase === 'fadeInOthers') {
      const timer = setTimeout(() => {
        if (current < totalGreetings - 1) {
          setCurrent(prev => prev + 1);
        } else {
          setPhase('slideUp');
        }
      }, otherFadeDuration);
      return () => clearTimeout(timer);
    } else if (phase === 'slideUp') {
      const timer = setTimeout(() => {
        onFinish();
      }, slideUpDuration);
      return () => clearTimeout(timer);
    }
  }, [phase, current, totalGreetings, onFinish, firstFadeDuration, otherFadeDuration, slideUpDuration]);

  return (
    <div className={`greetings-app ${phase === 'slideUp' ? 'page-slide-up' : ''}`}>
      <div className="greeting-container">
        <h1
          className={
            phase === 'fadeInFirst' && current === 0
              ? 'fade-in-first'
              : phase === 'fadeInOthers'
              ? 'fade-in-others'
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
