import React from "react";

function Button({ className, icons, text }) {
  return (
    <button className={className || ""}>
      {icons && <span>{icons}</span>}
      {text}
    </button>
  );
}

export default Button;
