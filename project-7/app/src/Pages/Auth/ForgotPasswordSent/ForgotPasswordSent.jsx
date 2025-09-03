import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function ForgotPasswordSent() {
  return (
    <div className=" h-[100%] flex items-center justify-center  px-4 ">
      <div className=" p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-5xl text-green-600" />
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Successfully Sent
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          We have sent instructions on how to reset your password to
          <span className="font-bold text-black">
            {" "}
            jenny.wilson@gmail.com.
          </span>{" "}
          Please follow the instructions from the email.
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordSent;
