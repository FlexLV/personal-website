import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, year, role, tech }) {
  return (
    <div className="project-row">
      <div className="project-left">
        <h2 className="project-title">{title}</h2>
        
      </div>
      <div className="project-right">
        <p className="project-tech">{tech}</p>
        <p className="project-year">{year}</p>
      </div>
    </div>
  );
}
