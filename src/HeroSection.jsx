import React, { useEffect, useState } from "react";
import "./HeroSection.css";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroSection() {
  const [cursors, setCursors] = useState({
    product: { anchorX: 950, anchorY: 70, angle: 0, speed: 0.002 },
    dev: { anchorX: 1020, anchorY: 360, angle: 2, speed: 0.002 },
    binil: { anchorX: 580, anchorY: 350, angle: 4, speed: 0.002 },
  });

  const [positions, setPositions] = useState({
    product: { x: 0, y: 0 },
    dev: { x: 0, y: 0 },
    binil: { x: 0, y: 0 },
  });

  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (mouseX - centerX) * 0.2;
    const offsetY = (mouseY - centerY) * 0.2;
    setHoverOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setHoverOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    let frameId;
    const animate = () => {
      setCursors((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          next[key].angle += next[key].speed + rand(-0.001, 0.001);
        });
        return next;
      });
      setPositions((prev) => {
        const next = { ...prev };
        Object.entries(cursors).forEach(([key, val]) => {
          const ox = 35 * Math.cos(val.angle);
          const oy = 35 * Math.sin(val.angle);
          next[key] = { x: val.anchorX + ox, y: val.anchorY + oy };
        });
        return next;
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
          <h1 className="greeting-text">Hello, I&apos;m Ernests</h1>
        </div>
      </div>
      <div className="title-row">
        <h1 className="big-title accentv digital-title">MODERN</h1>
        <div className="base-location">
          // Based in <br />
          Riga, Latvia
        </div>
      </div>
      <div className="experience-row">
        <h1 className="big-title accenty">FULL-STACK</h1>
      </div>
      <div className="designer-row">
        <h1 className="big-title accentl">WEB &amp; APP</h1>
        <div className="rounded-button-wrap">
          <button
            className="lets-connect-btn"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${hoverOffset.x}px, ${hoverOffset.y}px)`,
            }}
          >
            <div className="blob" />
            <div className="relative-green">
              <div className="green-dot-absolute"></div>
              <div className="green-dot-ping"></div>
            </div>
            <a className="letsconnect" href="/ContactMe">
              Let’s Connect
            </a>
          </button>
        </div>
      </div>
      <div className="dev-row-grid">
        <div className="dev-left">
          // Full-Stack Web <br />
          & Software Developer
        </div>
        <div className="dev-right">
          <h1 className="big-title accentc">DEVELOPER.</h1>
        </div>
      </div>
      <div className="last-section">
        <h1 className="final-description">
          I create digital solutions that excel in <br />
          <span className="accentv">efficiency</span>,{" "}
          <span className="accenty">reliability</span> and{" "}
          <span className="accentc">functionality</span>.
        </h1>
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
        <div className="cursor-bubble binil-bubble">Ernests</div>
      </div>
    </main>
  );
}
