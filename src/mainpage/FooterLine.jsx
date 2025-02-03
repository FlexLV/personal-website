// FooterLine.jsx
import React from "react";
import "./FooterLine.css";

export default function FooterLine() {
  return (
    <div className="footer">
      <div className="leftText">
        <span>{'// Design, Code,'}</span>
        <br />
        <span>Engage</span>
      </div>
      <div className="iconContainer">
        <button className="iconButton">
          <img src="./linkedin.png" alt="LinkedIn" className="icon linkedin" />
        </button>
        <button className="iconButton">
          <img src="./discord-image.png" alt="Discord" className="icon discord" />
        </button>
        <button className="iconButton">
          <img src="./github.png" alt="GitHub" className="icon github" />
        </button>
        <button className="iconButton">
          <img src="./leetcode.png" alt="LeetCode" className="icon leetcode" />
        </button>
        <button className="iconButton ">
          <img src="./instagram.png" alt="Instagram" className="icon instagram" />
        </button>
        <button className="iconButton ">
          <img src="./telegram.png" alt="Telegram" className="icon Telegram" />
        </button>
      </div>
      <div className="rightText">
        <button className="iconButton">
          <img src="./gmail.png" alt="Mail" className="icon gmail" />
        </button>
        <span className="emailText">ernisd621@gmail.com</span>
      </div>
    </div>
  );
}
