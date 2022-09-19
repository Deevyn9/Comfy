import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Nav Logo</h1>
          {/* <img src="" alt="" /> */}
          <div className="cart-toggle">
            <div className="theme-toggle">
              <DarkModeIcon />
              <p>Dark Mode</p>
            </div>
            <div className="cart">
              <ShoppingBagIcon />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
