// src/App.js
import React, { useState } from 'react';
import Greetings from './Greetings.jsx';
import MainContent from './MainContent';


function App() {
  const [showMain, setShowMain] = useState(false);

  const handleGreetingsFinish = () => {
    setShowMain(true);
  };

  return (
    <div className="App">
      {!showMain && <Greetings onFinish={handleGreetingsFinish} />}
      {showMain && <MainContent />}
    </div>
  );
}

export default App;
