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
    </div>
  );
}

export default About