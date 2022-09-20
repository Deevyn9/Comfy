import React from "react";
import Logo from "../assets/logo.jpg"
import DarkLogo from "../assets/logodark.jpg"
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Nav = ({darkMode, onClick}) => {
  return (
    <>
      <header className={`${darkMode ? "darkmode" : ""}`}>
        <nav>
          <div className={`logo-div ${darkMode ? "darkmode" : ""}`}>
            {/* {`${
              darkMode ? (
                <img src={Logo} alt="Splash Zone" height={80} />
              ) : (
                <img src={DarkLogo} alt="Splash Zone" height={80} />
              )
            }`} */}
          </div>
          <div className="cart-toggle">
            <div className="theme-toggle" onClick={onClick}>
              <DarkModeIcon />
              <p>Dark</p>
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
