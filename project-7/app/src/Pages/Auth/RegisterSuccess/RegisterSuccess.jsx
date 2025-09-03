import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function RegisterSuccess() {
  return (
    <div className=" h-[100%] flex items-center justify-center  px-4 ">
      <div className=" p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-5xl text-green-600" />
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Successfull Registration
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Hurray! you have Successfull created your account Enter the app and
          start your journey with us
        </p>

        {/* Button */}
        <button className="w-full bg-purple-600 cursor-pointer hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition">
          <Link to="/signin">Enter the app</Link>
        </button>
      </div>
    </div>
  );
}

export default RegisterSuccess;
