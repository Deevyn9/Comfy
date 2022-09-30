import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1648657459277-2655e01810b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507627593750-cab2a3684cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
  } 
export default Slides;