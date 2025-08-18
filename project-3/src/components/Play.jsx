import React from "react";
import ScoreGame from "./ScoreGame";
import NumberSelect from "./NumbSelect";

function Play() {
  return (
    <div className="gameplay">
      <div className="nav-score">
        <ScoreGame />
        <NumberSelect />
      </div>
      <main>
        
      </main>
    </div>
  );
}

export default Play;
