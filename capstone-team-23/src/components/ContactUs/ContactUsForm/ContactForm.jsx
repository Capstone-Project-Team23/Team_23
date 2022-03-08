import React, { useState } from "react";
import "./form.css"
import InputField from "../../Reusable Components/InputFields/InputField";
import Label from "../../Reusable Components/Label/Label";
import ShadowRect from "../../Reusable Components/ShadowRectContainer/ShadowRect";
import Button from "../../Reusable Components/Buttons/Button";

import Header from "../../Reusable Components/Header/Header";
import {style, styleHeader, labelStyle, Hed, textAreaStyle, textAreaStyle_Mobile} from './formstyle'

import Mailer from "../ContactUS Copied/WholePage/mailer";
function ContactForm() {  

    const html = [
        <Header text={Hed} style={styleHeader} />,
        <br></br>,
        <Mailer></Mailer>
      ];

      
    return <div >
      <ShadowRect style={style} html={html} />
    </div>
}

export default ContactForm;