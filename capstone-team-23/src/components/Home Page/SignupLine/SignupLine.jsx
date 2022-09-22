import React from "react"
import "./SignupLine.css"
import Button from "../../Reusable Components/Buttons/Button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import {customer, professional} from '../../../redux/actions/HomePageAction'
import { Link } from "react-router-dom"
export default function SignupLine() {
    
    const dispatch = useDispatch();
    const [route, setRoute] = useState('signUp')

    function selectionChanged(e) {
      console.log(e.target.value)
      if(e.target.value === 'customer') {
        dispatch(customer())
        setRoute('signUp')
      }
      if(e.target.value === 'professional') {
        dispatch(professional());
        setRoute('signUpProfessional')
      }
    }
    
    const buttonStyle = {
        padding:"5px",
        backgroundColor: "#1d214e",
        color: "white",
        border:"none",
        marginLeft:"10px",
        width:"7rem",
        fontSize:"1.2rem",
        height: "3rem",
        borderRadius:"200px"
    }
  return (
    <div className="SignupLine mt-5">
      <span  className="SignupLineText"> <span className="Iam">I am </span> 
     
      <select name="loginOptions" className="select-css" onChange={selectionChanged}>
      <option value="customer" className="option-css">Customer</option>
        <option value="professional" className="option-css">Professional</option>
        
      </select>
{
  console.log(route)
}
       <Link to={'/'+route}><button style={buttonStyle}>Signup</button></Link>
      
      </span>
    </div>
  )
}
