import react from "react";
import "./form.css"
import InputField from "../../Reusable Components/InputFields/InputField.jsx"
import Label from"../../Reusable Components/Label/Label.jsx"

function ContactUsFormInputFields() {
    return (
        <section >
            <p className="txt-598">
            Send <span className="txt-5982">M</span>essage
            </p>

            <form>
            <div class="form-group">
                <Label name="Full Name"></Label>
                <InputField 
                    type="text"
                    placeholder="Example: Mari jakson"
                    width = "300px"
                    height = "30px"
                ></InputField>
                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <Label name="Email"></Label>
                <InputField 
                    type="text"
                    placeholder="Example: Marijakson@gmail.com"
                    width = "300px"
                    height = "30px"
                ></InputField>

                <Label name="Number"></Label>
                <InputField 
                    type="Number"
                    placeholder="648 548 6545"
                    width = "300px"
                    height = "30px"
                ></InputField>

<div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
           </form>
        </section>

    );
}

export default ContactUsFormInputFields;