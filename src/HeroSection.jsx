import React, { useEffect, useState } from "react";
import "./HeroSection.css";

// A helper to return a small random float in a range
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroSection() {
  // Each cursor has an anchor (where it should hover around),
  // a current angle, and a random speed factor. 
  const [cursors, setCursors] = useState({
    product: {
      anchorX: 950, // Adjust so it hovers near "Hello, I'm Binil"
      anchorY: 70,
      angle: 0,
      speed: 0.002,
    },
    dev: {
      anchorX: 1020, // Adjust to hover near the "UI/UX Designer" text
      anchorY: 360,
      angle: 2,
      speed: 0.002,
    },
    binil: {
      anchorX: 580, // Adjust to hover near "Designer & Developer" 
      anchorY: 350,
      angle: 4,
      speed: 0.002,
    },
  });

  // Store the actual X/Y positions in state for the render
  const [positions, setPositions] = useState({
    product: { x: 0, y: 0 },
    dev: { x: 0, y: 0 },
    binil: { x: 0, y: 0 },
  });

  useEffect(() => {
    const radius = 35; // how far from the anchor each cursor can float
    let frameId;

    const animate = () => {
      setCursors((prev) => {
        const nextCursors = { ...prev };

        // For each cursor, we tweak the angle by a base speed + a tiny random “jitter”
        // so it doesn’t look too robotic.
        Object.keys(nextCursors).forEach((key) => {
          const c = nextCursors[key];
          c.angle += c.speed + rand(-0.001, 0.001); // small random variation
        });

        return nextCursors;
      });

      // Now compute new x/y for each cursor
      setPositions((prevPos) => {
        const newPos = { ...prevPos };
        Object.entries(cursors).forEach(([key, c]) => {
          // The wiggle X/Y around the anchor
          const offsetX = radius * Math.cos(c.angle);
          const offsetY = radius * Math.sin(c.angle);
          newPos[key] = {
            x: c.anchorX + offsetX,
            y: c.anchorY + offsetY,
          };
        });
        return newPos;
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [cursors]);

  return (
    <main className="main-container">
      {/* --- Avatar + Greeting row --- */}
      <div className="avatar-row">
        <div className="avatar-circle">
          <img
            alt="hero"
            width="100"
            height="100"
            className="avatar-image"
            src="./image0.jpg"
          />
        </div>
        <div className="greeting-bubble">
          <h1 className="greeting-text">Hello, I&apos;m Binil</h1>
        </div>
      </div>

      {/* --- Floating cursors with random wiggle --- */}

      {/* Product cursor, anchored near top-left (adjust anchorX/Y above) */}
      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.product.x}px, ${positions.product.y}px)`,
        }}
      >
        <img src="./cursor1.png" alt="cursor1" className="cursor-img" />
        <div className="cursor-bubble product-bubble">Product</div>
      </div>

      {/* Dev cursor */}
      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.dev.x}px, ${positions.dev.y}px)`,
        }}
      >
        <img src="./cursor2.png" alt="cursor2" className="cursor-img" />
        <div className="cursor-bubble dev-bubble">Dev</div>
      </div>

      {/* thegr8binil cursor */}
      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.binil.x}px, ${positions.binil.y}px)`,
        }}
      >
        <img src="./cursor3.png" alt="cursor3" className="cursor-img" />
        <div className="cursor-bubble binil-bubble">thegr8binil</div>
      </div>

      {/* --- Remaining layout (same as before) --- */}
      <div className="row1">
        <h1 className="hidden-on-sm">
          // UI/UX Designer <br />
          Full-Stack Developer
        </h1>
        <h1 className="big-title accentv">DIGITAL</h1>
        <h1 className="base-location">
          // Based in <br />
          Kerala, India
        </h1>
      </div>

      <div className="row2">
        <h1 className="big-title accenty">EXPERIENCE</h1>
      </div>

      <div className="row3">
        <h1 className="big-title accentl">DESIGNER</h1>
        <div className="btn-and-username">
          <div className="rounded-button-wrap">
            <button className="lets-connect-btn">
              <div className="relative-green">
                <div className="green-dot-absolute"></div>
                <div className="green-dot-ping"></div>
              </div>
              <a className="z-10" href="/ContactMe">
                Let’s Connect
              </a>
            </button>
            <div className="blue-bg-circle"></div>
          </div>
        </div>
      </div>

      <div className="row4">
        <h1 className="hidden-sm-inline">
          // UI/UX Designer <br />
          Full-Stack Developer
        </h1>
        <h1 className="big-title accentc">
          <span className="text-primary">&amp; </span>
          DEVELOPER.
        </h1>
      </div>

      <div className="last-section">
        <h1 className="final-description">
          I create a digital experience that borders on <br />
          <span className="accentv">efficiency</span>,{" "}
          <span className="accenty">aesthetics</span> and{" "}
          <span className="accentc">functionality</span>.
        </h1>
      </div>
    </main>
  );
}
