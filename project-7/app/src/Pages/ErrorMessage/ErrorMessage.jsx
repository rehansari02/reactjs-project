import React from "react";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";

function ErrorMessage() {
  return (
    <div className=" h-[80vh]   flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white px-4">
      <FaGhost className="text-9xl mb-6 animate-bounce" />
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Arre Lala! Page kho gaya 🔍</p>
      <p className="text-lg opacity-80 mt-2">
        Jo tum dhoond rahe ho, wo yaha nahi milne wala 😅
      </p>

      <Link
        to="/"
        className="mt-8 bg-white text-purple-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-purple-100 transition-all"
      >
        Wapas Ghar Chalo 🏠
      </Link>
    </div>
  );
}

export default ErrorMessage;
