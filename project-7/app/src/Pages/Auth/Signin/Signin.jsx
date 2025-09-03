import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // yahan form submit ka logic add kar sakte ho
  };

  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black text-center">
          Welcome to Crypto App
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
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
