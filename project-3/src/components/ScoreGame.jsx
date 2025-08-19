import React from "react";

function ScoreGame({ score }) {
  return (
    <div className="score">
      <h1>{score}</h1>
      <h3>Total Score</h3>
    </div>
  );
}

export default ScoreGame;
