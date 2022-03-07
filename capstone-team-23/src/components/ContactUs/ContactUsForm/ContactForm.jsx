import React, { useState } from "react";
import "./form.css"
import InputField from "../../Reusable Components/InputFields/InputField";
import Label from "../../Reusable Components/Label/Label";
import ShadowRect from "../../Reusable Components/ShadowRectContainer/ShadowRect";
import Button from "../../Reusable Components/Buttons/Button";

import Header from "../../Reusable Components/Header/Header";
import {style, styleHeader, labelStyle, Hed, textAreaStyle, textAreaStyle_Mobile} from './formstyle'
function ContactForm() {  


  //Contact form back end
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  /////backend End

    const html = [
        <Header text={Hed} style={styleHeader} />,
        <br></br>,
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>,
      ];
    return <div >
      <ShadowRect style={style} html={html} />
    </div>
}

export default ContactForm;