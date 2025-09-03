import React from "react";
import { MdEmail } from "react-icons/md";

function RegisterEmailVerify() {
  return (
    <div className=" h-[100%] flex items-center justify-center  px-4 ">
      <div className=" p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <MdEmail className="text-5xl text-purple-500" />
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We have sent an email verification to{" "}
          <span className="font-medium">labalab@gmail.com</span>. Please check
          your inbox.
        </p>

        {/* Button */}
        <button className="w-full bg-purple-500 cursor-pointer hover:bg-purple-600 text-white py-2 rounded-lg font-medium transition">
          Re-send Email
        </button>
      </div>
    </div>
  );
}

export default RegisterEmailVerify;
