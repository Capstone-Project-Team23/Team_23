import react from "react";
import "./form.css"
import InputField from "../../Reusable Components/InputFields/InputField.jsx"
import Label from"../../Reusable Components/Label/Label.jsx"

function ContactUsFormInputFields() {
    return (
        <section>
            <p className="txt-598">
            Send <span className="txt-5982">M</span>essage
            </p>

            <Label name="Full Name"></Label>
            <InputField 
                type="text"
                placeholder="Example: Mari jakson"
                width = "300px"
                height = "30px"
            ></InputField>

            <Label name="Email"></Label>
            <InputField 
                type="text"
                placeholder="Example: Mari jakson"
                width = "300px"
                height = "30px"
            ></InputField>

            <Label name="Number"></Label>
            <InputField 
                type="Number"
                placeholder="Example: Mari jakson"
                width = "300px"
                height = "30px"
            ></InputField>
           
        </section>

    );
}

export default ContactUsFormInputFields;