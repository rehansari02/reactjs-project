import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/config.js";

// ✅ Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [type, setType] = useState("success");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setMessage(null);

      // Backend request
      const response = await axios.post("/user/forgot-password", {
        email: data.email,
      });

      // ✅ Backend se token nikal rahe
      const token = response.data.token;

      setType("success");
      setMessage("Verification email sent! Check your inbox.");

      // ✅ Navigate + state me email + token
      setTimeout(() => {
        setMessage(null);
        navigate("/forgot-success", { state: { email: data.email, token } });
      }, 1000);
    } catch (error) {
      setType("error");
      setMessage(error.response?.data?.message || "Something went wrong!");
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-start bg-white">
        {/* Back Icon */}
        <div className="flex justify-start mb-4">
          <Link to="/signin">
            <FaArrowLeft className="text-3xl text-black font-bold cursor-pointer hover:scale-120" />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter your email address to reset your password
        </p>

        {/* Show message */}
        {message && (
          <div
            className={`mb-4 p-2 rounded-lg text-sm font-medium ${
              type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black mb-2 text-sm font-bold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer text-white py-2 rounded-lg font-medium transition ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
