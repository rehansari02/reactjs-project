import React, { useState } from "react";

function NumbSelect() {
  let [Selection, setSelection] = useState(1);
  let array = [1, 2, 3, 4, 5, 6];
  console.log(Selection);

  return (
    <div>
      <div style={{ display: "flex", gap: "15px" }}>
        {array &&
          array.map((num) => (
            <button
              key={num}
              onClick={() => {
                setSelection(num);
              }}
              className="number-button"
            >
              {num}
            </button>
          ))}
      </div>
      <h3 className="select">Select One Number</h3>
    </div>
  );
}

export default NumbSelect;
