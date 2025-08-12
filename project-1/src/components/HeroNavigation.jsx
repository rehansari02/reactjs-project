import React from "react";
import shoes from "../assets/shoe_image.png";

function HeroNavigation() {
  return (
    <div className="herosection">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="social-logo">
          <img
            src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg"
            alt="amazon"
          />
          <img
            src="https://play-lh.googleusercontent.com/FA_rzaEeLlumm0qh68q3z5Pt-PGMVPf2Z28_pbega7SaXSiKjSzh-0MZceB3FpdvQIBq"
            alt="flipkart"
          />
        </div>
      </div>
      <div className="hero-img">
        <img src={shoes} alt="shoes" />
      </div>
    </div>
  );
}

export default HeroNavigation;
