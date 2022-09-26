import React from "react";
import Insta from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Pinterest from "../assets/pinterest.svg";

const Footer = () => {
  return (
    <>
      <div className="footer__main">
        <div className="left">
          <h2>Comfy.</h2>
          <div className="socials">
              <img src={Insta} alt="" width={30} />
              <img src={Twitter} alt="" width={30} />
              <img src={Pinterest} alt="" width={30} />
          </div>
          <div className="sub">
            <p>stay in the loop, when is our next sale?</p>
            <div className="main__sub">
              <input type="email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>Get in Touch</h3>
          <ul>
            <li>info@comfy.com</li>
            <li>Speak to us live</li>
            <li>Mon-Fri 9am-5pm</li>
          </ul>
        </div>
      </div>
      <span className="copy">Copyright © 2022 Comfy. All rights reserved.</span>
    </>
  );
};

export default Footer;
