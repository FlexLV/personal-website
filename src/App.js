import React, { useState } from "react";
import Greetings from "./Greetings.jsx";
import MainContent from "./MainContent";
import Footerline from "./FooterLine";

function App() {
  // This state just tracks whether the Greetings overlay is finished and should be removed
  const [greetingsFinished, setGreetingsFinished] = useState(false);

  const handleGreetingsFinish = () => {
    // When greetings animation is done, remove Greetings from the DOM
    setGreetingsFinished(true);
  };

  return (
    <div className="App">
      {/* Always render the main content so it's always in the background */}
      <MainContent />
      <Footerline />

      {/* Render the overlay on top until it finishes */}
      {!greetingsFinished && <Greetings onFinish={handleGreetingsFinish} />}
    </div>
  );
}

export default App;
