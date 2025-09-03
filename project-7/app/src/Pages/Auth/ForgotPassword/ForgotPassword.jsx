import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

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

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // yahan tu backend API call kar sakta hai
  };

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-start bg-white">
        {/* Back Icon */}
        <div className="flex justify-start mb-4">
          <Link to={"/signin"}>
            <FaArrowLeft className="text-3xl text-black font-bold cursor-pointer" />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter your email address to reset your password
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
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

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
