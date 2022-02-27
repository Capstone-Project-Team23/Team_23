import react from "react";
import "./form.css"
import InputField from "../../Reusable Components/InputFields/InputField";
import Label from "../../Reusable Components/Label/Label";
import ShadowRect from "../../Reusable Components/ShadowRectContainer/ShadowRect";
import Button from "../../Reusable Components/Buttons/Button";

import Header from "../../Reusable Components/Header/Header";
import {style, styleHeader, labelStyle, Hed, textAreaStyle, textAreaStyle_Mobile} from './formstyle'
function ContactForm() {  
    const html = [
        <Header text={Hed} style={styleHeader} />,
        <br></br>,
        <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Full Name" />,
        <InputField placeholder="John Cena" width="250px" />,
        <br></br>,
        <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Email" />,
        <InputField placeholder="John@gmail.com" width="250px" />,
        <br></br>,
        <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Number" />,
        <InputField placeholder="###-###-####" width="250px" />,
        <br></br>,
        <Label style={window.innerWidth<480 ? {marginLeft: "1.5rem"} :labelStyle} name="Message" />,
         <textarea style={window.innerWidth<480? textAreaStyle_Mobile :textAreaStyle}></textarea>,
         <br></br>,
        <Button buttonText="Send" width="250px" style={
          {
            width:"16rem",
            marginTop:"1rem"
          }} />,
      ];
    return <div >
      <ShadowRect style={style} html={html} />
    </div>
}

export default ContactForm;