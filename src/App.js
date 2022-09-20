import React from 'react';
import Nav from './components/nav';
import { useState } from "react"
import MainShop from './components/mainShop';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const switchMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <div className={`App ${darkMode ? "darkmode" : ""}`}>
      <Nav darkMode={darkMode} onClick={switchMode} />
      <main>
        <MainShop />
      </main>
    </div>
  );
}

export default App;