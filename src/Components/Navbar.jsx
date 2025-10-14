import React from 'react';
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="nav-container">
        <div className="center-pill">
          <div className="pill">
            <button>
              <Link to="/" >
                <span className="material-icons icon">home</span>
                Home
              </Link>
            </button>
            <button>
              <Link to="/projects" >
                <span className="material-icons icon">work</span>
                My Projects
              </Link>
            </button>
            <button>
              <Link to="/about" >
                <span className="material-icons icon">person</span>
                About Me
              </Link>
            </button>
          </div>
        </div>
  
        <div className="right-pill">
          <div className="pill">
            <button className='contact-button'>
              <Link to="/contact">
                <span className="material-icons icon">mail</span>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }