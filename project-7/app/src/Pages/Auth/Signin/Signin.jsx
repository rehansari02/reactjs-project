import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../../../api/config.js";
import { useAuth } from "../../../Provider/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

// ✅ Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 chars")
    .required("Password is required"),
  remember: yup.boolean(),
});

function Signin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  // context

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const { remember, ...submitData } = data;
      const response = await axios.post("/user/signin", submitData);
      if (response.data?.token) {
        login(response.data.token); //  context me token save
      }

      // ✅ success popup
      setPopup({ show: true, message: "Signin successful!", type: "success" });
      setTimeout(
        () => setPopup({ show: false, message: "", type: "" }),
        navigate("/"),
        3000
      );
    } catch (error) {
      setPopup({
        show: true,
        message:
          "Signin failed: " +
          (error.response?.data?.message || "Something went wrong"),
        type: "error",
      });
      setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] relative">
      {/* ✅ Popup div */}
      {popup.show && (
        <div
          className={`absolute top-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
            popup.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popup.message}
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black text-center">
          Welcome to Crypto App
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("remember")}
                className="mr-2"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        {/* Create Account */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
