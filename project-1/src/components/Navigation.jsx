import React from "react";
import image from "../assets/brand_logo.png";
function Navigation() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={image} alt="" />
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
