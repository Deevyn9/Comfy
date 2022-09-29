import React from 'react';
import { Link } from 'react-router-dom';
import ShopItems from "./shopItems"
import shopData from "./shopData";

const Shop = ({onClick, onRemove, cartItems, item }) => {
  return (
    <div className="main__shop">
      <div className="go-back">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="shop-container">
        {shopData.map((item) => (
        <ShopItems
          key={item.id}
          onClick={onClick}
          item={item}
          onRemove={onRemove}
          product={cartItems.find((x) => x.id === item.id)}
        />
        ))}
      </div>
    </div>
  );
}

export default Shop