import React from "react"
import "./SignupLine.css"
import Button from "../../Reusable Components/Buttons/Button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import {customer, professional} from '../../../redux/actions/HomePageAction'
import { Link } from "react-router-dom"
export default function SignupLine() {
    
    const dispatch = useDispatch();

    function selectionChanged(e) {
      console.log(e.target.value)
      if(e.target.value === 'customer') {
        dispatch(customer())
      }
      if(e.target.value === 'professional') {
        dispatch(professional());
      }
    }
    
    const buttonStyle = {
        padding:"5px",
        backgroundColor: "#1d214e",
        color: "white",
        border:"none",
        marginLeft:"10px",
        width:"12rem",
        fontSize:"1.5rem",
        height: "3.5rem",
        borderRadius:"200px"
    }
  return (
    <div className="SignupLine mt-5">
      <span  className="SignupLineText">I am 
     
      <select name="loginOptions" className="select-css" onChange={selectionChanged}>
      <option value="customer" className="option-css">Customer</option>
        <option value="professional" className="option-css">Professional</option>
        
      </select>

       <Link to="/signUp"><button style={buttonStyle}>Signup</button></Link>
      
      </span>
    </div>
  )
}
