import React from 'react'
import { Link } from "react-router-dom";
import HeroImage from "../assets/heroimage.jpg";
import HeroLandcape from "../assets/heroimageLandscape.jpg"
import Deal1 from "../assets/Deals/deal 1.jpg";
import Deal2 from "../assets/Deals/deal 2.jpg";
import Deal3 from "../assets/Deals/deal 3.jpg";
import Deal4 from "../assets/Deals/deal 4.jpg";
import Deal5 from "../assets/Deals/deal 5.jpg";

const MainShop = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <img src={HeroImage} alt="" className="hero-img portrait" />
          <img src={HeroLandcape} alt="" className="hero-img landscape" />
        </div>
        <div className="overlay"></div>
        <h2 className="hero-heading">
          <span className="hi">Hi,</span>
          <br />
          Welcome to
          <br />
          <span className="comfy">Comfy</span>
        </h2>
      </div>
      <div className="intro">
        <h2>At Comfy,</h2>
        <p>
          We provide a wide variety of couches that would have you{" "}
          <span className="comfy">comfy.</span>
        </p>
        <p>Let us handle yoour comfort today</p>
        <div className="btn-div">
          <Link to="/shop">
            <button>Shop</button>
          </Link>
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
      </div>
      <div className="featured">
        <h2>Deals this week</h2>
        <div className="featured-items">
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
          <div className="rectangle">
            <img src={Deal2} alt="" />
            <div className="prod-details">
              <div className="prod-name">
                <h3>Cream Two seater counch X2</h3>
              </div>
              <div className="prod-price">
                <p>
                  $500 <span className="old-price">$650</span>
                </p>
              </div>
            </div>
            <button className="add-cart">Add to Cart</button>
          </div>
          <div className="rectangle">
            <img src={Deal3} alt="" />
            <div className="prod-details">
              <div className="prod-name">
                <h3>Executive William 6 seater</h3>
              </div>
              <div className="prod-price">
                <p>
                  $500 <span className="old-price">$650</span>
                </p>
              </div>
            </div>
            <button className="add-cart">Add to Cart</button>
          </div>
          <div className="rectangle">
            <img src={Deal4} alt="" />
            <div className="prod-details">
              <div className="prod-name">
                <h3>Exotic Orange Armchair X3</h3>
              </div>
              <div className="prod-price">
                <p>
                  $600 <span className="old-price">$900</span>
                </p>
              </div>
            </div>
            <button className="add-cart">Add to Cart</button>
          </div>
          <div className="rectangle">
            <img src={Deal5} alt="" />
            <div className="prod-details">
              <div className="prod-name">
                <h3>Franklin Cyan Two Seater with Pillows</h3>
              </div>
              <div className="prod-price">
                <p>
                  $700 <span className="old-price">$790</span>
                </p>
              </div>
            </div>
            <button className="add-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainShop 