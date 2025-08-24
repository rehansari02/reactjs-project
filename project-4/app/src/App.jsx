import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FoodContain from "./Components/FoodContain";

function App() {
  const [searchText, setSearchText] = useState(""); // search state

  return (
    <div className="container">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <FoodContain searchText={searchText} />
    </div>
  );
}

export default App;
