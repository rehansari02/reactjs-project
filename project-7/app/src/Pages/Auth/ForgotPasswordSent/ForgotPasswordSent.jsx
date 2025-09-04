import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function ForgotPasswordSent() {
  const location = useLocation();

  // ✅ Backend se pass hua email aur token
  const email = location.state?.email || "";
  const token = location.state?.token || "";

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-5xl text-green-600" />
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Verification Email Sent
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          We have sent instructions to reset your password to{" "}
          <span className="font-bold text-black">{email}</span>.
          <br />
          Please check your inbox and click the link below to reset your
          password.
        </p>

        {/* Reset Password Button */}
        {token ? (
          <Link
            to={`/forgot-password-verify/${token}`}
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition"
          >
            Reset Password
          </Link>
        ) : (
          <p className="text-red-500 text-sm">
            Token not available. Please try sending the verification email
            again.
          </p>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordSent;
