import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import axios from "../../../api/config.js"; // apna axios instance

function RegisterSuccess() {
  const { token } = useParams(); // yaha se token mil jayega
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post("/user/verfiy-user-mail", { token });
        setStatus("success");
        setMessage(res.data.message);
      } catch (err) {
        setStatus("error");
        setMessage(err.response?.data?.message || "Invalid or expired token");
      }
    };
    verifyEmail();
  }, [token]);

  return (
    <div className="h-[100%] flex items-center justify-center px-4 ">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        {status === "loading" && (
          <p className="text-gray-600">Verifying your email...</p>
        )}

        {status === "success" && (
          <>
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-5xl text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {message || "Email Verified!"}
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Hurray! Your account is verified. Enter the app and start your
              journey with us.
            </p>
            <Link
              to="/signin"
              className="block w-full bg-purple-600 cursor-pointer hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition"
            >
              Enter the app
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-6 text-sm">{message}</p>
            <Link
              to="/signup"
              className="block w-full bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
            >
              Try Again
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterSuccess;
