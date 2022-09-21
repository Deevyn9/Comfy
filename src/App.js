import React from 'react';
import Nav from './components/nav';
import MainShop from './components/mainShop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <MainShop />
      </main>
    </div>
  );
}

export default App;