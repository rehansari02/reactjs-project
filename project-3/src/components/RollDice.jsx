import React, { useState } from "react";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function RollDice({ currentDice, rollDice, resetScore }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <div className="rolldice">
        <img
          src={diceImages[currentDice - 1]}
          alt={`dice-${currentDice}`}
          onClick={rollDice}
          style={{ cursor: "pointer" }}
        />
        <p>Click on Dice to roll</p>

        <button id="reset" onClick={resetScore}>
          Reset Score
        </button>

        <button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
      </div>

      {showRules && (
        <div className="rules">
          <h3>How to play dice game</h3>
          <p>1. Select any number (1–6)</p>
          <p>2. Click on dice image</p>
          <p>3. If your selected number matches → +10 points</p>
          <p>4. If wrong guess → 2 points deducted</p>
        </div>
      )}
    </>
  );
}

export default RollDice;
