// WhatIDo.jsx

import React from "react";
import "./WhatIDo.css";
import FadeInLeft from "../animations/FadeInLeft"; // import the component

export default function WhatIDo() {
  return (
    <div className="What-I-Do">
      <h1 className="what-i-do-title">WHAT I DO</h1>
      <div className="services-container">

        <FadeInLeft delay={0}>
          <div className="service-box">
            <div className="service-icon teal-icon">
              <img
                className="dekstop-pc"
                src="./icons/pc-mobile.png"
                alt="pcmobile"
              />
            </div>
            <h2>Full-Stack Development</h2>
            <p>Building efficient front and back-end solutions that scale with your business.</p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.1}>
          <div className="service-box">
            <div className="service-icon purple-icon">
              <img
                className="dekstop-pc"
                src="./icons/database.png"
                alt="database"
              />
            </div>
            <h2>Database Design & Management</h2>
            <p>Planning and optimizing secure and reliable data structures.</p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.2}>
          <div className="service-box">
            <div className="service-icon pink-icon">
              <img
                className="dekstop-pc"
                src="./icons/api.png"
                alt="api"
              />
            </div>
            <h2>API & Integrations</h2>
            <p>Ensuring seamless data flow with robust REST/GraphQL APIs.</p>
          </div>
        </FadeInLeft>

        <FadeInLeft delay={0.3}>
          <div className="service-box">
            <div className="service-icon orange-icon">
              <img
                className="dekstop-pc"
                src="./icons/flash.png"
                alt="flash"
              />
            </div>
            <h2>Performance & Security</h2>
            <p>Optimizing speed, stability, and safety through best practices.</p>
          </div>
        </FadeInLeft>

      </div>
    </div>
  );
}
