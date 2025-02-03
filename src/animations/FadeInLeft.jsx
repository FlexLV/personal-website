import React, { useRef, useState, useEffect } from "react";
import "./FadeInLeft.css";

export default function FadeInLeft({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve so animation only triggers once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust if you want earlier or later triggers
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup when component unmounts
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`fade-in-left ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
