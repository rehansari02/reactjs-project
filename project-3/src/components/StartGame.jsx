import React from "react";
import dices from "../assets/dicess.png";

function StartGame({ setdata }) {
  return (
    <div className="start">
      <div className="dice">
        <img src={dices} alt="Dice Logo" />
      </div>
      <div className="play">
        <h1>Dice Game</h1>
        <button onClick={setdata}>Play now</button>
      </div>
    </div>
  );
}

export default StartGame;
