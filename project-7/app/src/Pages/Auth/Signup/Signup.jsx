import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

// Yup Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat Password is required"),
  agree: yup.boolean().oneOf([true], "You must accept terms & conditions"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { repeatPassword, agree, ...submitData } = data; // repeatPassword remove
      const response = await axios.post(
        "http://localhost:9000/user/signup",
        submitData
      );
      console.log("Server Response:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error:", error.response.data);
      alert("Signup failed: " + error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black text-center">
          Welcome to Crypto App
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Create a free account by filling data below
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* First Name + Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-black">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName")}
                className={`w-full px-3 py-2 rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } text-black outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm text-black">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName")}
                className={`w-full px-3 py-2 rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } text-black outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full px-3 py-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-black outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-black">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
              className={`w-full px-3 py-2 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } text-black outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Repeat Password */}
          <div>
            <label className="block text-sm text-black">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat your password"
              {...register("repeatPassword")}
              className={`w-full px-3 py-2 rounded-lg border ${
                errors.repeatPassword ? "border-red-500" : "border-gray-300"
              } text-black outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.repeatPassword.message}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("agree")}
              className="h-4 w-4 text-purple-500"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-purple-500 cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mt-1">{errors.agree.message}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-medium"
          >
            Create Account
          </button>
        </form>

        {/* Login link */}
        <p className="text-gray-700 text-center mt-4">
          If you already have an account{" "}
          <Link
            to="/signin"
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
