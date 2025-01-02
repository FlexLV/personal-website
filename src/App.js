import React from 'react'
import './App.css'

export default function MainPage() {
  return (
    
    <nav className="nav-container">

      {/* Center Pill */}
      <div className="center-pill">
        <div className="pill">
          <button>Home</button>
          <button>My Projects</button>
          <button>About Me</button>
        </div>
      </div>

      {/* Right Pill */}
      <div className="right-pill">
        <div className="pill">
          <button>Contact Me</button>
        </div>
      </div>
    </nav>
  )
}
