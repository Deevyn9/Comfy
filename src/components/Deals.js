import React from 'react'
import dealsData from './dealsData';


const Deals = ({onClick}) => {
  const deals = dealsData.map((deal) => {
    return (
      <div className="rectangle" key={deal.id}>
        <img src={deal.src} alt="" />
        <div className="prod-details">
          <div className="prod-name">
            <h3>{deal.name}</h3>
          </div>
          <div className="prod-price">
            <p>
              {deal.newPrice} <span className="old-price">{deal.oldPrice}</span>
            </p>
          </div>
        </div>
        <button className="add-cart" onClick={() => onClick(deal)}>Add to Cart</button>
      </div>
    );
  });

  return (
    <>
      <div className="featured">
        <h2>Deals this week</h2>
        <div className="featured-items">
          {deals}
        </div>
      </div>
    </>
  );
}

export default Deals