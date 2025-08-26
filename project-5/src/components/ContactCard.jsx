import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";

function ContactCard({ contact }) {
  return (
    <div className="flex justify-between items-center bg-[#FFEAAE] rounded-lg p-3">
      <div className="flex gap-3 items-center">
        <FaUserCircle className="text-3xl text-black" />
        <div className="flex flex-col">
          <h2 className="text-black font-bold text-sm">{contact.name}</h2>
          <p className="text-gray-600 text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-2 mx-1">
        <button className="px-2.5 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          <RiEditCircleLine />
        </button>
        <button className="px-2.5 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
