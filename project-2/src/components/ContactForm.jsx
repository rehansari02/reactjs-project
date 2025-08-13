import React, { useState } from "react";
import calls from "../assets/contact.svg";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Button from "./Button";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [send, setSend] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
    setSend([...send, data]);
    setData({ name: "", email: "", text: "" }); // Reset form fields
  };

  const msg = <MdOutlineMessage />;
  const call = <IoCallSharp />;

  return (
    <>
      <section>
        {/* Left Side - Form */}
        <div>
          {/* Top Buttons */}
          <div className="btns">
            <Button icons={msg} text="VIA SUPPORT CHAT" />
            <Button icons={call} text="VIA CALL" />
          </div>

          {/* Outline Button */}
          <Button className="outline" icons={msg} text="VIA EMAIL FORM" />

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                value={data.name}
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <label>Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="email"
                value={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <label>Email</label>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Message"
                value={data.text}
                required
                onChange={(e) => setData({ ...data, text: e.target.value })}
              />
              <label>Message</label>
            </div>

            <Button className="submit" text="Submit" />
          </form>
        </div>

        {/* Right Side - Image */}
        <div>
          <img src={calls} alt="Contact illustration" />
        </div>
      </section>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {send.map((sends, index) => (
            <tr key={index}>
              <td>{sends.name}</td>
              <td>{sends.email}</td>
              <td>{sends.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContactForm;
