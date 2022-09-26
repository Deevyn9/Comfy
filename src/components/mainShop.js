import React from 'react'
import { Link } from "react-router-dom";
import HeroImage from "../assets/heroimage.jpg";
import HeroLandcape from "../assets/heroimageLandscape.jpg"
import Deals from './Deals';

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
      <Deals />
    </>
  );
}

export default MainShop 