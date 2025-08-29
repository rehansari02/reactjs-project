import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function TopNav({ toggleSidebar }) {
  const [users, setUser] = useState(false);
  const location = useLocation();

  let pageName = "";
  switch (location.pathname) {
    case "/":
      pageName = "Dashboard";
      break;
    case "/transaction":
      pageName = "Transactions";
      break;
    case "/support":
      pageName = "Support";
      break;
    default:
      pageName = "";
  }

  return (
    <>
      <div className="w-full h-[70px] flex justify-between items-center px-5 shadow-md bg-white">
        <div className="flex items-center gap-3">
          {/* Hamburger button */}
          <button className="text-2xl cursor-pointer" onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
          <h1 className="text-3xl font-bold">{pageName}</h1>
        </div>

        <div className="user relative">
          <FaUser
            className="text-2xl cursor-pointer"
            onClick={() => setUser(!users)}
          />
          {users && (
            <div className="absolute right-0 top-12 w-[200px] flex flex-col gap-2 p-3 bg-white rounded-xl shadow-lg">
              <h2 className="text-lg font-semibold hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
                Support
              </h2>
              <h2 className="text-lg font-semibold text-red-600 hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer">
                Logout
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TopNav;
