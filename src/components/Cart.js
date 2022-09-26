import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="cart__section">
      <div className="go-back">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart