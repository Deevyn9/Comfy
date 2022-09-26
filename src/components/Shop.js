import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className='main__shop'>
      <div className="go-back">
        <Link to="/">
            <button>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Shop