import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import MainShop from "./components/mainShop";
import Shop from "./components/Shop";
import About from "./components/About";
import Footer from "./components/footer";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...item, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id != item.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <div className="App">
      <Nav count={cartItems.length} />
      <main>
        <Routes>
          <Route path="/" element={<MainShop onClick={addItem} />} />
          <Route
            path="/shop"
            element={
              <Shop
                onClick={addItem}
                onRemove={onRemove}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onClick={addItem} />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
