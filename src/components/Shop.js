import React from 'react';
import { Link } from 'react-router-dom';
import Deal1 from "../assets/Deals/deal 1.jpg";

const Shop = () => {
  return (
    <div className="main__shop">
      <div className="go-back">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="shop-container">
        <div className="rectangle">
          <img src={Deal1} alt="" />
          <div className="prod-details">
            <div className="prod-name">
              <h3>Three seater Couch and Armchair X2</h3>
            </div>
            <div className="prod-price">
              <p>
                $1100 <span className="old-price">$1400</span>
              </p>
            </div>
          </div>
          <button className="add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Shop