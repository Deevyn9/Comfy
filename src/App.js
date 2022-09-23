import React from 'react';
import Nav from './components/nav';
import MainShop from './components/mainShop';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <header> */}
        <Nav />
      {/* </header> */}
      <main>
        <MainShop />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;