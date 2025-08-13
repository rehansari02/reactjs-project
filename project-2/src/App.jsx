import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="conatiner">
        <Navigation />
        <ContactHeader />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
