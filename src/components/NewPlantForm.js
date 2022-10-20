import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  // state
  // const [formObj, setFormObj] = useState({})

  function handleSubmit(event) {
    event.preventDefault();
    // add new plant to plants state variable in PlantPage parent
    const newName = event.target.name.value;
    const newImage = event.target.image.value;
    const newPrice = event.target.price.value;
    addPlant(newName, newImage, newPrice);
  }

  // handleChange
  // onChange
  //
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
