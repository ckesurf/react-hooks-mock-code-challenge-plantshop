import React from "react";
import PlantCard from "./PlantCard";


function PlantList({ plants }) {
  // what do we want to achieve?
  // take all the plants and turn them into PlantCards


  /**
   * {
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99
      },
   */
  const plantCards = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  });
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
