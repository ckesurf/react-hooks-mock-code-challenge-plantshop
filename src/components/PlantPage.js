import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = "http://localhost:6001/plants";


function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchPlants, setSearchPlants] = useState(plants);

  function handleNewPlant(newPlant) {
    // add to our plants array
    const newPlantArray = [...plants, newPlant];
    setPlants(newPlantArray)
  }

  function handleSearch(event) {
    const searchInput = event.target.value;
    setSearchQuery(searchInput)
  }

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(plantsData => setPlants(plantsData));
  }, []);


  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
