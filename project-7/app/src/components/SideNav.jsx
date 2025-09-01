import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function SideNav({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 bg-opacity-30 z-20 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed left-0 top-0 h-screen w-[250px] bg-white z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-3">
          <GrClose className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Sidebar Head */}
        <div className="nav-head mb-10 text-purple-600 mx-4">
          <h2 className="text-2xl font-bold">@rehansari</h2>
        </div>

        {/* Nav Links */}
        <div className="nav-links flex flex-col justify-start font-bold text-gray-700 px-3 gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "hover:bg-gray-200 hover:text-black"
              }`
            }
            onClick={toggleSidebar}
          >
            <RxDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "hover:bg-gray-200 hover:text-black"
              }`
            }
            onClick={toggleSidebar}
          >
            <CgArrowsExchangeAltV size={20} className="rotate-45" />
            <span>Transactions</span>
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "hover:bg-gray-200 hover:text-black"
              }`
            }
            onClick={toggleSidebar}
          >
            <BiSupport size={20} />
            <span>Support</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default SideNav;
