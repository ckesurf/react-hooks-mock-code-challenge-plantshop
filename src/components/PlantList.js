import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  /* render PlantCards components in here */
  // <PlantCard />
  const plantCards = plants.map(p => <PlantCard {...p} key={p.id} />)
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
