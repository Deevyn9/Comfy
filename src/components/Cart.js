import React from 'react'
import { Link } from 'react-router-dom';
import Deal1 from "../assets/Deals/deal 1.jpg";

const Cart = () => {
  return (
    <div className="cart__section">
      <div className="go-back">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
      </div>
      <div className="main-cart">
        <div className="cart-item">
          <div className="item-img">
            <img src={Deal1} alt="" />
          </div>
          <div className="remove-name">
            <div className="item-name">
              <p>Three seater Couch and Two Armchair</p>
            </div>
            <div className="remove">remove</div>
          </div>
          <div className="quan-price">
            <div className="quantity">
              <div className="minus"> - </div>
              <div className="count">2</div>
              <div className="plus">+</div>
            </div>
            <div className="item-price">
              <p>$1100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart