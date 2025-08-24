import React from "react";
import logo from "../assets/logo.png";
function Navbar({ searchText, setSearchText }) {
  return (
    <nav>
      <div className="nav-part1">
        <img src={logo} alt="logo" />
        <input
          type="text"
          placeholder="Search Food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="nav-part2">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
    </nav>
  );
}

export default Navbar;
