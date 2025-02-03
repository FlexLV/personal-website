import React, { useState, useEffect } from "react";
import Greetings from "../greetings/Greetings.jsx";
import MainContent from "../mainpage/MainContent.jsx";
import "./App.css"

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
      <MainContent />
      {!greetingsFinished && <Greetings onFinish={handleGreetingsFinish} />}
    </div>
  );
}

export default App;
