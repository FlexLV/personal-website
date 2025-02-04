import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Formy-AI",
      year: "2024",
      tech: "Next.js, PostgreSQL, Clerk, Gemini API...",
    },
    {
      title: "FileFlex",
      year: "2024",
      tech: "Next.js, TypeScript, FFmpeg",
    },
    {
      title: "Next Dines",
      year: "2023",
      tech: "Figma, Notion",
    },
    {
      title: "Algo-Visualizer",
      year: "2023",
      tech: "React.js, Git",
    },
  ];

  return (

    <div className="my-projects-container">
      <h1 className="title-projects">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            year={project.year}
            tech={project.tech}
          />
        ))}
      </div>
      <button className="project-button">Load More </button>
    </div>
  );
}
