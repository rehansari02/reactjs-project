import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

function AmountCard() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end bg-white p-6 rounded-xl shadow gap-4 w-full">
      {/* Portfolio */}
      <div className="flex-1">
        <p className="flex items-center gap-2 text-gray-400 text-sm">
          Total Portfolio Value <HiOutlineExclamationCircle />
        </p>
        <h2 className="text-2xl font-semibold mt-1">₹ 112,312.24</h2>
      </div>

      {/* Wallet */}
      <div className="flex-1 text-left md:text-right">
        <p className="text-gray-400 text-sm">Wallet Balance</p>
        <h2 className="text-2xl font-semibold mt-1">
          22.39401000
          <span className="text-sm ml-2 bg-gray-200 px-1 py-0.5 rounded">
            BTC
          </span>
        </h2>
      </div>

      {/* INR Value */}
      <div className="flex-1 text-left md:text-right">
        <h2 className="text-2xl font-semibold">
          ₹ 1,300.00
          <span className="text-sm ml-2 bg-gray-200 px-1 py-0.5 rounded">
            INR
          </span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap mt-2 md:mt-0">
        <button className="flex gap-2 items-center text-md font-bold text-white bg-[#5F00D9] px-4 py-2 rounded-xl">
          <IoIosArrowRoundDown className="text-xl" /> Deposit
        </button>
        <button className="flex gap-2 items-center text-md font-bold text-white bg-[#5F00D9] px-4 py-2 rounded-xl">
          <IoIosArrowRoundUp className="text-xl" /> Withdraw
        </button>
      </div>
    </div>
  );
}

export default AmountCard;
