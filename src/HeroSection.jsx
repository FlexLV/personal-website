import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="avatar-bubble">
        <img 
          src="./image0.jpg"
          alt="Ernests Avatar"
          className="avatar-image"
        />
        <div className="speech-bubble">Hello, I’m Ernests</div>
        <div className="product-label">Product</div>
      </div>

      <h1 className="hero-title">
        <span className="digital">DIGITAL</span><br />
        <span className="experience">EXPERIENCE</span><br />
        <span className="designer">DESIGNER</span> &nbsp;
        <span className="developer">&amp; DEVELOPER</span>
      </h1>

      <div className="right-labels">
        <div className="label riga-label">Based in Riga, Latvia</div>
        <div className="label connect-label">
          <span className="green-dot" />
          Let’s Connect
        </div>
      </div>

      <div className="left-subtitle">
        <div>UI/UX Designer</div>
        <div>
          Full-Stack Developer
          <span className="dev-bubble">Dev</span>
        </div>
      </div>

      <p className="hero-description">
        I create and develop efficient, aesthetic, and 
        functional websites and software.
      </p>
    </section>
  );
}
