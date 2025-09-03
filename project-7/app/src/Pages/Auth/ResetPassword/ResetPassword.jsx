import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup schema
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password at least 6 characters ka honach")
    .required("Password is required"),
  repeat: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password is required"),
});

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Password reset successfully!");
  };

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-start bg-white">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Reset Password
        </h2>
        <p className="text-gray-600 mb-6 text-sm">Enter your new password.</p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black mb-2 text-sm font-bold"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Repeat Password */}
          <div className="mb-4">
            <label
              htmlFor="repeat"
              className="block text-black mb-2 text-sm font-bold"
            >
              Repeat New Password
            </label>
            <input
              type="password"
              id="repeat"
              placeholder="Re-enter Password"
              {...register("repeat")}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.repeat ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.repeat && (
              <p className="text-red-500 text-sm mt-1">
                {errors.repeat.message}
              </p>
            )}
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-gray-200 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
