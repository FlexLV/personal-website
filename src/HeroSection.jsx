import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* 1) Avatar + speech bubble + product label */}
      <div className="avatar-bubble">
        <img 
          src="/path/to/your-avatar.png"
          alt="Ernests Avatar"
          className="avatar-image"
        />
        <div className="speech-bubble">Hello, I’m Ernests</div>
        <div className="product-label">Product</div>
      </div>

      {/* 2) Big multi-colored heading */}
      <h1 className="hero-title">
        <span className="digital">DIGITAL</span><br />
        <span className="experience">EXPERIENCE</span><br />
        <span className="designer">DESIGNER</span> &nbsp;
        <span className="developer">&amp; DEVELOPER</span>
      </h1>

      {/* 3) "Based in Riga, Latvia" + "Let’s Connect" to the top-right */}
      <div className="right-labels">
        <div className="label riga-label">Based in Riga, Latvia</div>
        <div className="label connect-label">
          <span className="green-dot" />
          Let’s Connect
        </div>
      </div>

      {/* 4) UI/UX / Full-Stack + Dev bubble on the left */}
      <div className="left-subtitle">
        <div>// UI/UX Designer</div>
        <div>Full-Stack Developer
          <span className="dev-bubble">Dev</span>
        </div>
      </div>

      {/* 5) Paragraph */}
      <p className="hero-description">
        I create and develop efficient, aesthetic, and 
        functional websites and software.
      </p>
    </section>
  );
}
