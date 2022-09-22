import React from "react";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png"

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          {/* <div className="nav-links">
            <ul>
              <li>Shop</li>
              <li>About Us</li>
            </ul>
          </div> */}
          <img src={Logo} alt="Comfy Logo" height={60} />
          <div className="cart-profile">
            <div className="profile">
              <img src={User} alt="Log in or Sign up" />
            </div>
            <div className="cart">
              <img src={Cart} alt="go to cart" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
