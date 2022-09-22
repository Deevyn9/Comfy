import React from 'react'
import HeroImage from "../assets/heroimage.jpg";
import HeroLandcape from "../assets/heroimageLandscape.jpg"

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
          <button>Shop</button>
          <button>About Us</button>
        </div>
      </div>
    </>
  );
}

export default MainShop 