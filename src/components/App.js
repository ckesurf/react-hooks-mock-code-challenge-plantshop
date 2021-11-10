import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// DONE - 1. When the app starts, I can see all plants.
// DONE - 2. I can add a new plant to the page by submitting the form.
// DONE - 3. I can mark a plant as "sold out".
// DONE - 4. I can search for plants by their name and see a filtered list of plants.


function App() {
  const [plants, setPlants] = useState([]);

  // e.g. newPlant = {
  //   "id": 7,
  //   "name": "Fiddle Leaf Fig",
  //   "image": "./images/fiddle-leaf-fig.jpg",
  //   "price": 55
  // }
  function handleAddPlant(newPlant) {

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((newPlantResponse) => {
        console.log(newPlantResponse)
        const newPlantsArray = [...plants, newPlantResponse]
        setPlants(newPlantsArray);
      });
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPlants(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
