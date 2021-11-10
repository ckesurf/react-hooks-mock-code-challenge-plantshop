import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleAddPlant }) {
  const [searchFilter, setSearchFilter] = useState("");

  function handleSearchFilter(event) {
    setSearchFilter(event.target.value);
  }

  let filteredPlants;
  if (searchFilter === "") {
    filteredPlants = plants;
  } else {
    filteredPlants = plants.filter(plant => plant.name.includes(searchFilter))
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchFilter={searchFilter} handleSearchFilter={handleSearchFilter} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
