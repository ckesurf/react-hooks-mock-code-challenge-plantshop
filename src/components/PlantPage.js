import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  function addPlant(name, image, price) {
    const newPlantObj = { name, image, price };
    // add this newPlantObj to plants
    // persist
    // POST
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantObj),
    })
      .then((res) => res.json())
      // taking json -> js obj
      .then((data) => setPlants([...plants, data]));
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // filter for plants RIGHT NOW
  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
