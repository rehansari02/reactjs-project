import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/config.js";

// ✅ Yup schema for password validation
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeat: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password is required"),
});

function ResetPassword() {
  const { token } = useParams(); // token URL se milega
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error | ""
  const [message, setMessage] = useState("");

  // ✅ submit handler
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("/user/verify-forgot-mail", {
        token,
        password: data.password,
      });

      setStatus("success");
      setMessage(res.data.message || "Password changed successfully!");
      setTimeout(() => navigate("/signin"), 2000); // redirect to signin after success
    } catch (err) {
      setStatus("error");
      setMessage(err.response?.data?.message || "Invalid or expired token!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100%] flex items-center justify-center px-4">
      <div className="p-6 rounded-2xl shadow-lg max-w-sm w-full text-start bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Reset Password
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter your new password below.
        </p>

        {/* Status message */}
        {status && (
          <div
            className={`mb-4 p-2 rounded-lg text-sm font-medium ${
              status === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Password Reset Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Re-enter password"
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

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-medium text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
