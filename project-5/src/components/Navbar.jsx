import React from "react";
import logo from "../assets/logos_firebase.png";


function Navbar() {
  return (
    <>
      <nav className="h-[60px] w-[95%] bg-white rounded-[15px] flex justify-center  items-center ml-[7px] mt-[5px]">
        <div className="nav-wrap h-full w-[90%] flex justify-center items-center gap-[7px]">
          <img src={logo} alt="logo" />
          <h2 className="text-[20px] font-bold text-black">
            Firebase Contact App
          </h2>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
