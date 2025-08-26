import { deleteDoc } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaPlus } from "react-icons/fa";
import contactphoto from "./assets/HandsContact.png";
import { db } from "./config/firebase";
import { IoMdClose } from "react-icons/io";

import ContactCard from "./components/ContactCard";

function App() {
  // add
  let [add, setAdd] = useState(false);
  // contacts
  let [contacts, setContacts] = useState([]);
  // search
  let [search, setSearch] = useState("");
  // formm
  let [form, setForm] = useState({
    name: "",
    email: "",
  });
  // edit
  let [editContact, setEditContact] = useState(null);
  // delete
  let [deleteContact, setDeleteContact] = useState(null);

  // firbase data
  const getContacts = async () => {
    try {
      const collectionRef = collection(db, "contacts");
      const contactSnapShot = await getDocs(collectionRef);
      const contactList = contactSnapShot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setContacts(contactList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  // form submit (same as before)
  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (editContact) {
        const contactRef = doc(db, "contacts", editContact.id);
        await updateDoc(contactRef, {
          name: form.name,
          email: form.email,
        });
        alert("Contact updated ✅");
        setEditContact(null);
      } else {
        await addDoc(collection(db, "contacts"), {
          name: form.name,
          email: form.email,
        });
        alert("Contact added ✅");
      }
      getContacts();
      setForm({
        name: "",
        email: "",
      });
      setAdd(false);
    } catch (err) {
      console.log(err);
    }
  };

  let ConatactUpdate = (data) => {
    if (data) {
      setEditContact(data);
      setAdd(true);
      setForm({
        name: data.name,
        email: data.email,
      });
    }
  };

  let ConatactDelete = async (data) => {
    setDeleteContact(data);
  };

  let deletelist = async () => {
    try {
      await deleteDoc(doc(db, "contacts", deleteContact.id));
      alert("Contact deleted ✅");
      getContacts();
      setDeleteContact(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (deleteContact) {
      deletelist();
    }
  }, [deleteContact]);
  // 🔎 Filtered contacts based on search
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  let closed = () => {
    setAdd(false);
    setEditContact(null);
    setForm({
      name: "",
      email: "",
    });
  };

  return (
    <div className="container h-screen w-full flex justify-center items-center">
      {/* mobile */}
      <div className="mobile h-[550px] w-[300px] border-[5px] border-black ml-[5px] rounded-[20px] bg-[#5A5959] overflow-hidden">
        <Navbar seAdd={setAdd} />
        {/* search */}
        <div className="w-[94%] mx-2 mt-3 flex justify-center items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contact..."
            className="w-full px-4 py-2 rounded-[12px] border border-gray-300 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            onClick={() => setAdd(true)}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[40px]  bg-white rounded-full shadow-md hover:scale-105 transition"
          >
            <FaPlus className="text-xl text-black" />
          </button>
        </div>
        {add ? (
          // agar add true hai => form show hoga
          <div className="mt-4 p-3 bg-white rounded-lg w-[90%] mx-auto relative">
            {/* Close Button */}
            <button
              onClick={closed}
              className="absolute top-2 left-2 text-gray-600 hover:text-black"
            >
              <IoMdClose className="text-2xl" />
            </button>

            <h2 className="text-black font-bold mb-3 text-center text-lg">
              {editContact ? "Update Contact" : "Add Contact"}
            </h2>

            <form className="flex flex-col gap-2" onSubmit={handlesubmit}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
                className="px-3 py-1.5 rounded border border-black focus:outline-none"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                className="px-3 py-1.5 rounded border border-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {editContact ? "Update" : "Add"}
              </button>
            </form>
          </div>
        ) : (
          // agar add false hai => contacts list show hogi
          <div className="contactData mt-4 flex flex-col gap-2 p-2 h-[80%] overflow-y-auto overflow-x-hidden">
            {filteredContacts.length >= 1 ? (
              filteredContacts.map((contact) => (
                <ContactCard
                  contact={contact}
                  key={contact.id}
                  setEditContact={ConatactUpdate}
                  setDeleteContact={ConatactDelete}
                />
              ))
            ) : (
              <div className="flex justify-center items-center gap-4 h-[100%] w-[100%]">
                <img src={contactphoto} alt="conatct" className="h-10" />
                <h2 className="text-white text-center">
                  No contacts available.
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
