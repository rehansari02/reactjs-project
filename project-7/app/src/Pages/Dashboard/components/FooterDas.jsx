import React from "react";
import visual from "./assets/Visual.svg";

function FooterDas() {
  return (
    <div className="footer-das flex  flex-wrap justify-between items-center w-full  gap-8 ">
      <div className="foot1 h-[130px] w-[600px]  bg-white shadow p-7 overflow-hidden rounded-xl ">
        <button className=" flex gap-2 items-center text-sm font-bold text-white bg-[#5F00D9] px-4 py-2 rounded-full">
          Loan
        </button>
        <h3 className="text-gray-600 font-bold mt-3 ">
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </h3>
      </div>
      <div
        className="foot2 h-[130px] w-[600px]  p-7 bg-cover bg-top bg-no-repeat bg-[#5F00D9] rounded-xl shadow overflow-hidden "
        style={{ backgroundImage: `url('${visual}')` }}
      >
        <button className="flex gap-2 items-center text-sm font-bold text-[#5F00D9] bg-white px-4 py-2 rounded-full">
          Contact
        </button>
        <h3 className="text-white font-bold mt-3 ">
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </h3>
      </div>
    </div>
  );
}

export default FooterDas;
