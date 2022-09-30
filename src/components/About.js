import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about__section">
      <div className="go-back">
        <Link to="/shop">
          <button>Start Shopping</button>
        </Link>
      </div>
      <div className="main__about">
        <h3>About Us</h3>
        <img
          src="https://images.unsplash.com/photo-1648657458755-74ceaf075f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
          <span>
            We launched The Pillow Drop as we were frustrated with the lack of
            chic and statement pillows to brighten up our living space that were
            within our price range!
          </span>
          <span>
            We always loved needlepoint but wanted to redefine the market with a
            unique, colourful and playful design. It was important for our
            pillows to also be affordable compared to what is currently on that
            market, as we want our cushions to be accessible to everyone! We
            hope you love them as much as we do!
          </span>
          <span>The Pillow Drop x</span>
        </p>
      </div>
    </div>
  );
}

export default About