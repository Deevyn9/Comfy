import React from "react";


const shopItems = ({ product, item, onRemove, onClick }) => {
  
    return (
      <div className="rectangle" key={item.id}>
        <img src={item.src} alt="" />
        <div className="prod-details">
          <div className="prod-name">
            <h3>{item.name}</h3>
          </div>
          <div className="prod-price">
            <p>{item.Price}</p>
          </div>
        </div>
        <div className="button">
          {product ? (
            <div className="add-cart">
              <button onClick={() => onRemove(product)} className="remove"> - </button>
              <p>{product.qty}</p>
              <button className="add" onClick={() => onClick(product)}>
                +
              </button>
            </div>
          ) : (
            <button className="add-cart" onClick={() => onClick(item)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );

//   return <>{items}</>;
};

export default shopItems;
