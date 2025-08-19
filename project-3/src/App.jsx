import React, { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Play from "./components/Play";

function App() {
  const [start, setStart] = useState(false);

  return <>{start ? <Play /> : <StartGame setdata={() => setStart(true)} />}</>;
}

export default App;
