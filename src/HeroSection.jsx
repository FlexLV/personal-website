import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
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
          <h1 className="greeting-text">
            Hello, I'm Ernets
            <div
              className="pink-product-transform"
              style={{ transform: "translate(-30px, 45px)" }}
            >
              <img
                src="../SVG/Product.svg"
                alt="product"
                className="pink-product-img"
              />
            </div>
          </h1>
        </div>
      </div>

      <div className="small-screen-dev">
        <div
          className="dev-transform"
          style={{ transform: "translate(-48px, 8px)" }}
        >
          <img
            src="../SVG/Dev.svg"
            alt="product"
            className="small-dev-img"
          />
        </div>
      </div>

      <div className="row1">
        <h1 className="hidden-on-sm">
          // UI/UX Designer <br />
          Full-Stack Developer
        </h1>
        <h1 className="big-title accentv">DIGITAL</h1>
        <h1 className="base-location">
          // Based in <br />
          Riga, Latvia
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

          <div
            className="thegr8binil-transform"
            style={{ transform: "translate(49px, -36px)" }}
          >
            <img
              src="../SVG/thegr8binil.svg"
              alt="product"
              className="thegr8binil-img"
            />
          </div>
        </div>
      </div>

      <div className="row4">
        <h1 className="hidden-sm-inline">
          // Web/Soft <br />
          Full-Stack Developer
          <div
            className="dev-transform2"
            style={{ transform: "translate(20px, 44px)" }}
          >
            <img
              src="../SVG/Dev.svg"
              alt="product"
              className="dev-img-absolute"
            />
          </div>
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
