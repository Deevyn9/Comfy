import React from "react";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png"
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <img src={Logo} alt="Comfy Logo" height={80} />
          <div className="cart-toggle">
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
