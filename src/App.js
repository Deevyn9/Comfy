import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/nav";
import MainShop from "./components/mainShop";
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/footer';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<MainShop />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;