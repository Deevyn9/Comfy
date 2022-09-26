import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png"

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Comfy Logo" height={60} />
          </Link>
          <div className="cart-profile">
            <div className="profile">
              <img src={User} alt="Log in or Sign up" />
            </div>
            <div className="cart">
              <Link to="/cart">
                <img src={Cart} alt="go to cart" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
