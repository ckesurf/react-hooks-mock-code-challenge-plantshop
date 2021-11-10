import React, { useState } from "react";

// I can mark a plant as "sold out".
function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock(isInStock => !isInStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
