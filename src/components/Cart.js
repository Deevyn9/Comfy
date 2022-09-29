import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({cartItems, item, onRemove}) => {

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="cart__section">
      <div className="go-back">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
      </div>
      <div className="main-cart">
        {cartItems.length === 0 && <p>cart is empty</p>}
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-img">
              <img src={item.src} alt="" />
            </div>
            <div className="remove-name">
              <div className="item-name">
                <p>{item.name}</p>
              </div>
              <div className="remove">remove</div>
            </div>
            <div className="quan-price">
              <div className="quantity">
               Qty({item.qty})
              </div>
              <div className="item-price">
                <p>${item.qty * item.Price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart