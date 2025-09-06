import React, { useState } from "react";
import ScoreGame from "./ScoreGame";
import NumberSelect from "./NumbSelect";
import RollDice from "./RollDice";

function Play() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);

  const rollDice = () => {
    
    if (!selectedNumber) {
      alert("Please select a number first!");
      return;
    }

    const random = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(random);

    if (selectedNumber === random) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null);
  };

  return (
    <div className="gameplay">
      <div className="nav-score">
        <ScoreGame score={score} />
        <NumberSelect
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <main>
        <RollDice
          currentDice={currentDice}
          rollDice={rollDice}
          resetScore={resetScore}
        />
      </main>
    </div>
  );
}

export default Play;
