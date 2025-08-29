import React from "react";
import { FaMessage } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import visual from "../Pages/Support/assets/Visual.svg";

function SupportLayout() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-20 py-6">
      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-3">
          <FaMessage className="text-3xl text-purple-700" />
          <h3 className="text-2xl md:text-3xl font-bold">Contact Us</h3>
          <p className="text-gray-500 text-sm md:text-base">
            Have a question or just want to know more? Feel free to reach out to
            us.
          </p>
        </div>

        {/* Form */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-md w-full max-w-md">
          <p className="text-sm font-semibold text-gray-800 mb-4">
            You will receive a response within 24 hours of submitting.
          </p>
          <form className="flex flex-col gap-4">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none w-full"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-200 text-gray-800 rounded-lg p-3 hover:bg-gray-300 transition-colors"
              >
                Book a Meeting
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-3">
          <IoChatbubbleEllipses className="text-3xl text-purple-700" />
          <h3 className="text-2xl md:text-3xl font-bold">Live Chat</h3>
          <p className="text-gray-500 text-sm md:text-base">
            Don’t have time to wait for the answer? Chat with us now.
          </p>
        </div>

        {/* Visual Card */}
        <div
          className="flex-1 relative bg-purple-700 rounded-xl shadow-md overflow-hidden w-full max-w-md p-6 flex flex-col justify-end"
          style={{
            backgroundImage: `url('${visual}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <button className="flex gap-2 items-center text-sm font-bold text-purple-700 bg-white px-4 py-2 rounded-full mb-3 w-max">
            Contact
          </button>
          <h3 className="text-white font-bold text-sm md:text-base">
            Learn more about Loans – Keep your Bitcoin, access its value without
            selling it
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SupportLayout;
