import React from 'react'
import Slides from './Carousel';


const Deals = () => {
  return (
    <>
      <div className="featured">
        <h2>Featured</h2>
        <div className="featured-items">
          <Slides />
        </div>
      </div>
    </>
  );
}

export default Deals