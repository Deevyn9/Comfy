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
      </div>
    </>
  );
}

export default MainShop 