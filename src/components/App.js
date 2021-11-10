import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


// DONE - 1. When the app starts, I can see all plants.
// 2. I can add a new plant to the page by submitting the form.



function App() {
  // set up state to hold plants

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
