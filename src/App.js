import React from 'react';
import './App.css';

export default function MainPage() {
  return (
    <nav className="nav-container">
      <div className="center-pill">
        <div className="pill">
          <button>
            <span className="material-icons icon">home</span>
            Home
          </button>
          <button>
            <span className="material-icons icon">work</span>
            My Projects
          </button>
          <button>
            <span className="material-icons icon">person</span>
            About Me
          </button>
        </div>
      </div>

      <div className="right-pill">
        <div className="pill">
          <button>
            <span className="material-icons icon">mail</span>
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
