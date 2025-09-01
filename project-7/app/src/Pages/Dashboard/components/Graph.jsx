import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import graph from "./assets/graphs.svg";
import Transaction from "./Transaction";

function Graph() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Graph Section */}
      <div className="flex-1 bg-white rounded-xl p-4 shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
          {/* Wallet Info */}
          <div>
            <p className="text-gray-400 text-sm">Wallet Balance</p>
            <h2 className="text-2xl font-bold flex items-end gap-1">
              22.39401000
              <span className="text-sm px-2 py-0.5 rounded text-green-500 flex items-center gap-1">
                <MdOutlineArrowOutward className="text-xl" /> 22%
              </span>
            </h2>
          </div>

          {/* Buy / Sell buttons */}
          <div className="flex flex-wrap gap-2">
            <button className="flex gap-2 items-center text-white bg-[#5F00D9] px-4 py-2 rounded-xl w-full sm:w-auto justify-center">
              <IoIosAddCircle /> Buy
            </button>
            <button className="flex gap-2 items-center text-white bg-[#5F00D9] px-4 py-2 rounded-xl w-full sm:w-auto justify-center">
              <GrSubtractCircle /> Sell
            </button>
          </div>
        </div>

        {/* Time Filters */}
        <div className="flex justify-end gap-2 mt-3 text-sm font-bold text-gray-700 flex-wrap">
          <button className="px-2 py-1 bg-gray-100 cursor-pointer">1H</button>
          <button className="px-2 py-1 bg-gray-100 cursor-pointer">1D</button>
          <button className="px-2 py-1 bg-gray-100 cursor-pointer">1W</button>
          <button className="px-2 py-1 bg-gray-100 cursor-pointer">1M</button>
        </div>

        {/* Graph */}
        <div className="mt-3">
          <img
            src={graph}
            alt="graph"
            className="w-full h-[180px] object-contain"
          />
        </div>

        {/* Time Stamps */}
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <p>09:30 PM</p>
          <p>12:00 PM</p>
          <p>15:30 PM</p>
          <p>18:00 PM</p>
          <p>21:00 PM</p>
        </div>
      </div>

      {/* Transaction Section */}
      <div className="flex-1 bg-white rounded-xl p-4 shadow">
        <Transaction />
      </div>
    </div>
  );
}

export default Graph;
