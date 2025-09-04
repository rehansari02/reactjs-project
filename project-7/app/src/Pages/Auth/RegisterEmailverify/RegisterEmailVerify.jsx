import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../../api/config.js";

function RegisterEmailVerify() {
  const location = useLocation();
  const email = location.state?.email || "test123@gmail.com";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resendEmail = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await axios.post("/user/send-verification-mail", {
        email,
      });

      // token backend se directly mil raha
      const token = response.data.token;

      // Navigate with token param
      navigate(`/email-verify/${token}`);
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response?.data?.message || error.message
      );
      alert("Failed to send email!");
    } finally {
      setTimeout(() => setLoading(false), 3000);
    }
  };

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-center bg-white">
        <div className="flex justify-center mb-4">
          <MdEmail className="text-5xl text-purple-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We have sent a verification email to{" "}
          <span className="font-medium text-black">{email}</span>.
        </p>
        <button
          onClick={resendEmail}
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600"
          } text-white py-2 rounded-lg font-medium transition`}
        >
          {loading ? "Sending..." : "Re-send Email"}
        </button>
      </div>
    </div>
  );
}

export default RegisterEmailVerify;
