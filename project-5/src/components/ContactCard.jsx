import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";

function ContactCard({ contact, setEditContact, setDeleteContact }) {
  return (
    <div className="flex justify-between items-center bg-[#FFEAAE] rounded-lg p-3 w-full">
      {/* Left Section */}
      <div className="flex gap-3 items-center w-[70%] overflow-hidden">
        <FaUserCircle className="text-3xl text-black shrink-0" />
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-black font-bold text-sm truncate">
            {contact.name}
          </h2>
          <p className="text-gray-600 text-sm truncate">{contact.email}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 items-center">
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setEditContact(contact)}
        >
          <RiEditCircleLine className="text-lg" />
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => setDeleteContact(contact)}
        >
          <MdDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
