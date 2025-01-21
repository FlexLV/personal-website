import React, { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  // -- Setup for floating cursors --
  const [floatingPositions, setFloatingPositions] = useState({
    product: { x: 0, y: 0, angle: 0 },
    dev: { x: 0, y: 0, angle: 120 },
    binil: { x: 0, y: 0, angle: 240 },
  });

  useEffect(() => {
    // Increased radius to 20, speed to 0.05
    const radius = 20;
    const speed = 0.15;

    const interval = setInterval(() => {
      setFloatingPositions((prev) => {
        // Update each item’s angle, then compute x/y
        const newProductAngle = prev.product.angle + speed;
        const newDevAngle = prev.dev.angle + speed;
        const newBinilAngle = prev.binil.angle + speed;

        return {
          product: {
            angle: newProductAngle,
            x: radius * Math.cos(newProductAngle),
            y: radius * Math.sin(newProductAngle),
          },
          dev: {
            angle: newDevAngle,
            x: radius * Math.cos(newDevAngle),
            y: radius * Math.sin(newDevAngle),
          },
          binil: {
            angle: newBinilAngle,
            x: radius * Math.cos(newBinilAngle),
            y: radius * Math.sin(newBinilAngle),
          },
        };
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-container">
      {/* Avatar + Greeting row */}
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
          <h1 className="greeting-text">
            Hello, I&apos;m Binil
            {/* The floating “Product” cursor */}
            <div
              className="pink-product-transform"
              style={{
                transform: `translate(${
                  -30 + floatingPositions.product.x
                }px, ${45 + floatingPositions.product.y}px)`,
              }}
            >
              {/* Replaced the Product.svg with cursor(1).png */}
              <img
                src="./cursor1.png"
                alt="cursor1"
                className="pink-product-img"
              />
            </div>
          </h1>
        </div>
      </div>

      {/* For smaller screens, “Dev” cursor */}
      <div className="small-screen-dev">
        <div
          className="dev-transform"
          style={{
            transform: `translate(${
              -48 + floatingPositions.dev.x
            }px, ${8 + floatingPositions.dev.y}px)`,
          }}
        >
          {/* Replaced the Dev.svg with cursor(2).png */}
          <img
            src="./cursor2.png"
            alt="cursor2"
            className="small-dev-img"
          />
        </div>
      </div>

      {/* Row 1 */}
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

      {/* Row 2 */}
      <div className="row2">
        <h1 className="big-title accenty">EXPERIENCE</h1>
      </div>

      {/* Row 3 */}
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

          {/* Floating label: “thegr8binil” */}
          <div
            className="thegr8binil-transform"
            style={{
              transform: `translate(${
                49 + floatingPositions.binil.x
              }px, ${-36 + floatingPositions.binil.y}px)`,
            }}
          >
            {/* Replaced thegr8binil.svg with cursor(3).png */}
            <img
              src="./cursor3.png"
              alt="cursor3"
              className="thegr8binil-img"
            />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row4">
        <h1 className="hidden-sm-inline">
          // UI/UX Designer <br />
          Full-Stack Developer
          <div
            className="dev-transform2"
            style={{
              transform: `translate(${
                20 + floatingPositions.dev.x
              }px, ${44 + floatingPositions.dev.y}px)`,
            }}
          >
            {/* You could also swap in cursor(2).png here as well */}
            <img
              src="./cursor(2).png"
              alt="cursor2"
              className="dev-img-absolute"
            />
          </div>
        </h1>
        <h1 className="big-title accentc">
          <span className="text-primary">&amp; </span>
          DEVELOPER.
        </h1>
      </div>

      {/* Final description */}
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
