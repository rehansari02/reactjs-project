import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaPlus } from "react-icons/fa";

import { db } from "./config/firebase";

import ContactCard from "./components/ContactCard";

function App() {
  let [add, setAdd] = useState(false);
  let [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const collectionRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(collectionRef);
        const contactList = contactSnapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setContacts(contactList);
        console.log(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="container h-screen w-full flex justify-center items-center">
      <div className="mobile h-[550px] w-[300px] border-[5px] border-black ml-[5px] rounded-[20px] bg-[#5A5959]">
        <Navbar seAdd={setAdd} />

        {/* search */}
        <div className="w-[94%] mx-2 mt-3 flex justify-center items-center gap-2">
          <input
            type="text"
            // value="fgfgfg"
            placeholder="Search contact..."
            className="w-full px-4 py-2 rounded-[12px] border border-gray-300 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            onClick={() => setAdd((prev) => !prev)}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[40px]  bg-white rounded-full shadow-md hover:scale-105 transition"
          >
            <FaPlus className="text-xl text-black" />
          </button>
        </div>
        {add ? (
          // agar add true hai => form show hoga
          <div className="mt-4 p-3 bg-white rounded-lg w-[90%] mx-auto">
            <h2 className="text-black font-bold mb-3 text-center text-lg">
              Add Contact
            </h2>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-1.5 rounded border border-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-1.5 rounded border border-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Save
              </button>
            </form>
          </div>
        ) : (
          // agar add false hai => contacts list show hogi
          <div className="mt-4 flex flex-col gap-2 p-2 overflow-y-auto">
            {contacts.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
