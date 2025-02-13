import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
    const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (mouseX - centerX) * 0.4; /* Increased range */
        const offsetY = (mouseY - centerY) * 0.4; /* Increased Y-axis range */
        setHoverOffset({ x: offsetX, y: offsetY });
    };

    const handleMouseLeave = () => {
        setHoverOffset({ x: 0, y: 0 });
    };

    const projects = [
        { title: "Formy-AI", year: "2024", tech: "Next.js, PostgreSQL, Clerk, Gemini API..." },
        { title: "FileFlex", year: "2024", tech: "Next.js, TypeScript, FFmpeg" },
        { title: "Next Dines", year: "2023", tech: "Figma, Notion" },
        { title: "Algo-Visualizer", year: "2023", tech: "React.js, Git" },
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
            <div className="project-button-container">
                <button
                    className="project-button"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translate(${hoverOffset.x}px, ${hoverOffset.y}px)`,
                    }}
                >
                    <div className="blob" />
                    <span>
                        Load More <FiArrowRight />
                    </span>
                </button>
            </div>
        </div>
    );
}
