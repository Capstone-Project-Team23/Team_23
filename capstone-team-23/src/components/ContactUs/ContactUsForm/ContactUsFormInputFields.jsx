import react from "react";
import Input from "../../../ReuseableComponents/InputField/Input";
import "./form.css"

function ContactUsFormInputFields() {
    return (
        <section>
            <p className="txt-598">
            Send <span className="txt-5982">M</span>essage
            </p>
            <Input name={"First Name"}></Input>
        </section>

    );
}

export default ContactUsFormInputFields;