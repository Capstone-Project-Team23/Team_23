import React from "react"
import "./SignupLine.css"
import Button from "../../Reusable Components/Buttons/Button"

export default function SignupLine() {

    const buttonStyle = {
        padding:"10px",
        backgroundColor: "#1d214e",
        color: "white",
        border:"none",
        marginLeft:"10px",
        width:"180px",
        fontSize:"1.7rem"
    }
  return (
    <div className="SignupLine mt-5">
      <span  className="SignupLineText">I am 
     
      <select name="loginOptions" className="select-css">
        <option value="professional" className="option-css">Professional</option>
        <option value="customer" className="option-css">Customer</option>
      </select>

       <Button buttonText = "Signup" style={buttonStyle}/>
      
      </span>
    </div>
  )
}
