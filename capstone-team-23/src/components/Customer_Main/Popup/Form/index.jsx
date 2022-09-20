import React from 'react';
import Label from '../../../Reusable Components/Label/Label';
import InputField from '../../../Reusable Components/InputFields/InputField';
import {style, styleHeader, labelStyle, styleFooter, styleLogin, styleWindows, styleGoogle} from '../../../Sign Up Page/WholePage/css/style'
import Header from '../../../Reusable Components/Header/Header';
//import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { doc, onSnapshot, collection, query, where,addDoc, getDocs,setDoc } from "firebase/firestore";
import { useState } from 'react';
import db from '../../../../firebase/firestore'
export const Form = () => {
  
  {/*
 things to include in the form
 1. Requested service category drop down
 2. Location (google api)
 3. Budget
 4. Description - Text area
 
 object - 
 let pushObject = {
  service : grass cutting,
  location: 123 street, 
  Budget: 300$
  Description: Need grass cutting
 }
*/}
 
let [service, setService] = useState("Electrical Services")
let [location, setLocation] = useState()
let [budget, setBudget] = useState()
let [description, setDescription] = useState()



const arrOfServices = [
  {Name : "Electrical Services",Path:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},
  {Name : "General Construction",Path:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"},
  {Name : "Grass Cutting",Path:"https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3MlMjBjdXR0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  {Name : "Home Cleaning",Path:"https://images.unsplash.com/photo-1538944570562-2c9cb7857097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {Name : "Home Repair",Path:"https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {Name : "Landscapping",Path:"https://images.unsplash.com/photo-1455243629161-1f993797f78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  {Name : "Laundry",Path:"https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {Name : "Pest Control",Path:"https://images.unsplash.com/photo-1572731561221-96d988d74dc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  {Name : "Plumbing",Path:"https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  {Name : "Welding",Path:"https://images.unsplash.com/photo-1608126841548-dfad1d420a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  {Name : "Window Cleaning",Path:"https://images.unsplash.com/photo-1534350752840-1b1b71b4b4fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2luZG93JTIwY2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
 ] 
 const textAreaStyle = {
  backgroundColor: "rgba(196, 196, 196, 0.15)",
      fontFamily: "Poppins, sans-serif",
      borderRadius: "94px",
      border: "none",
      padding:"7px",
      fontSize: ".9em",
      width:"250px",
      marginLeft:"1rem",
}
const textAreaStyle_Mobile = {
  backgroundColor: "rgba(196, 196, 196, 0.15)",
      fontFamily: "Poppins, sans-serif",
      borderRadius: "94px",
      border: "none",
      padding:"7px",
      fontSize: ".9em",
      width:"250px",
      marginLeft:".1rem",
}
const handleService = (e) => {
 setService(e.target.value)
}
const handleBudget = (e) => {
  setBudget(e.target.value)
 }
 const handleLocation = (e) => {
  setLocation(e.target.value)
 }
 const handleDescription = (e) => {
  setDescription(e.target.value)
 }
const onSubmit = () => {
  console.log("This service is selected " + service)
  console.log("This location is selected " + location.label )//JSON.stringify(location))
  console.log("This description is selected " + description)
  console.log("This budget is selected " + budget)
 
  const pushingObject = {
    service,
    location: location.label,
    description,
    budget
  }
  const docRef = addDoc(collection(db, 'Requests'), pushingObject )

  alert("Data is updated")
}

  return (
    <>
      <div className="form-group">
      <Label  style={labelStyle}  name="Select Service" />
      <select onChange={handleService}>
      {/* <option><Header text="Test" style={{fontSize:"1.5rem"}}></Header></option> */}
    {arrOfServices.map(service => <option value={service.Name}>{service.Name}</option>)}
      </select>
      </div>
      <div className="form-group">
      <Label  style={labelStyle}  name="Location" />
      <GooglePlacesAutocomplete selectProps={{
          location,
          onChange: setLocation,
        }}
      apiKey="AIzaSyCtgnm2Hq3rd3ph2GZSbT6UFMONYik_4uQ"
    />

      {/* <AutoComplete
  apiKey="AIzaSyC2vkhGsiQxy68e6GkebvwdEr2v_lQBuiM"
  onPlaceSelected={(place) => console.log(place)}
/> */}



      </div>
      <div className="form-group">
      <Label  style={labelStyle}  name="Budget" />
      <InputField placeholder="$$$" width="250px" onChange={handleBudget}/>
      </div>
      <div className="form-group">
      <Label  style={labelStyle}  name="Description" />
      <textarea onChange={handleDescription} style={window.innerWidth<480? textAreaStyle_Mobile :textAreaStyle} name="message" row="4"></textarea>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
      </>
  );
};
export default Form;
