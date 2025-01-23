import React, { useEffect, useState } from "react";
import "./HeroSection.css";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroSection() {
  const [cursors, setCursors] = useState({
    product: {
      anchorX: 950,
      anchorY: 70,
      angle: 0,
      speed: 0.002,
    },
    dev: {
      anchorX: 1020,
      anchorY: 360,
      angle: 2,
      speed: 0.002,
    },
    binil: {
      anchorX: 580,
      anchorY: 350,
      angle: 4,
      speed: 0.002,
    },
  });

  const [positions, setPositions] = useState({
    product: { x: 0, y: 0 },
    dev: { x: 0, y: 0 },
    binil: { x: 0, y: 0 },
  });

  useEffect(() => {
    const radius = 35;
    let frameId;

    const animate = () => {
      setCursors((prev) => {
        const nextCursors = { ...prev };

        Object.keys(nextCursors).forEach((key) => {
          const c = nextCursors[key];
          c.angle += c.speed + rand(-0.001, 0.001);
        });

        return nextCursors;
      });

      setPositions((prevPos) => {
        const newPos = { ...prevPos };
        Object.entries(cursors).forEach(([key, c]) => {
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

      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.product.x}px, ${positions.product.y}px)`,
        }}
      >
        <img src="./cursor1.png" alt="cursor1" className="cursor-img" />
        <div className="cursor-bubble product-bubble">Product</div>
      </div>

      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.dev.x}px, ${positions.dev.y}px)`,
        }}
      >
        <img src="./cursor2.png" alt="cursor2" className="cursor-img" />
        <div className="cursor-bubble dev-bubble">Dev</div>
      </div>

      <div
        className="cursor-wrap"
        style={{
          transform: `translate(${positions.binil.x}px, ${positions.binil.y}px)`,
        }}
      >
        <img src="./cursor3.png" alt="cursor3" className="cursor-img" />
        <div className="cursor-bubble binil-bubble">thegr8binil</div>
      </div>

      <div className="row1">
        <h1 className="hidden-on-sm">
          UI/UX Designer <br />
          Full-Stack Developer
        </h1>
        <h1 className="big-title accentv">DIGITAL</h1>
        <h1 className="base-location">
          Based in <br />
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
          UI/UX Designer <br />
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
