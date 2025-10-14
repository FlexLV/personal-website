import React, { useState, useEffect } from "react";
import Greetings from "../greetings/Greetings.jsx";
import MainContent from "../mainpage/MainContent.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactPage from "../ContactMe/ContactPage.jsx";
import AboutMe from "../about/AboutMe.jsx";
import ProjectsPage from "../projects/ProjectsPage.jsx";

function App() {
  // Tracks whether the Greetings overlay is finished and should be removed
  const [greetingsFinished, setGreetingsFinished] = useState(false);

  const handleGreetingsFinish = () => {
    setGreetingsFinished(true);
  };

  /**
   * Hide the page scrollbar while Greetings is active
   * then restore it once Greetings is done.
   */
  useEffect(() => {
    if (!greetingsFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [greetingsFinished]);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<MainContent />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        {!greetingsFinished && <Greetings onFinish={handleGreetingsFinish} />}
      </div>
  );
}

export default App;
