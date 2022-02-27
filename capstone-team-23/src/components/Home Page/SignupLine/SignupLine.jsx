import React from "react"
import "./SignupLine.css"
import Button from "../../Reusable Components/Buttons/Button"

export default function SignupLine() {

    const buttonStyle = {
        padding:"5px",
        backgroundColor: "#1d214e",
        color: "white",
        border:"none",
        marginLeft:"10px",
        width:"12rem",
        fontSize:"1.5rem",
        height: "3.5rem"
    }
  return (
    <div className="SignupLine mt-5">
      <span  className="SignupLineText">I am 
     
      <select name="loginOptions" className="select-css">
        <option value="professional" className="option-css">Professional</option>
        <option value="customer" className="option-css">Customer</option>
      </select>

       <a href="/signUp"><Button buttonText = "Signup" style={buttonStyle}/></a>
      
      </span>
    </div>
  )
}
