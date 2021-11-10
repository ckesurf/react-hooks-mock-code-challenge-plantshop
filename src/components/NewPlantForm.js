import React from "react";

function NewPlantForm({ handleNewPlant }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.children.name.value;
    const image = event.target.children.image.value;
    const price = event.target.children.price.value;

    const newPlant = { name: name, image: image, price: price }
    console.log("///////// SENDING NEW PLANT DATA ////////////////")
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    }).then(response => response.json())
      .then(responsePlantData => {
        handleNewPlant(responsePlantData)
      })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
