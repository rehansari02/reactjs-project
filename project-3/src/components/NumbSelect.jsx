import React from "react";

function NumberSelect({ selectedNumber, setSelectedNumber }) {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div style={{ display: "flex", gap: "15px" }}>
        {array.map((num) => (
          <button
            key={num}
            onClick={() => setSelectedNumber(num)}
            className={`number-button ${
              selectedNumber === num ? "active" : ""
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <h3 className="select">Select One Number</h3>
    </div>
  );
}

export default NumberSelect;
