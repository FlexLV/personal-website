import React from "react";
import "./TechStack.css";

export default function TechStack() {
  const techIcons = [
    { id: 1, src: "./techlogos/js.png", alt: "JavaScript" },
    { id: 2, src: "./techlogos/cpp.png", alt: "C++" },
    { id: 3, src: "./techlogos/java.png", alt: "Java" },
    { id: 4, src: "./techlogos/aws.png", alt: "AWS" },
    { id: 5, src: "./techlogos/mysql.png", alt: "MySQL" },
    { id: 6, src: "./techlogos/nodejs.png", alt: "Node.js" },
    { id: 7, src: "./techlogos/react.png", alt: "React" },
    { id: 7, src: "./techlogos/php.png", alt: "PHP" },
    { id: 7, src: "./techlogos/Git.png", alt: "Git" },



  ];

  return (
    <div className="techStack">
      <h1>MY TECH STACK</h1>
      <h2>
        My expertise spans a diverse range of technologies, enabling me to deliver
        comprehensive and cutting-edge solutions across various platforms.
      </h2>
      <div className="slider">
        <div className="slide-track">
          {techIcons.map((icon) => (
            <div className="slide" key={icon.id}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
          {techIcons.map((icon) => (
            <div className="slide" key={`${icon.id}-clone`}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
