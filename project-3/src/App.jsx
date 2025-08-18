import React, { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Play from "./components/Play";

function App() {
  let [start, setStart] = useState(false);
  let play = () => {
    setStart(true);
  };

  return <>{start ? <Play /> : <StartGame setdata={play} />}</>;
}

export default App;
