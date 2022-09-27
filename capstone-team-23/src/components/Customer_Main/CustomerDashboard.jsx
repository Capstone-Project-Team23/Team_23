import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase-init'
import {  useNavigate  } from 'react-router-dom'
import SearchBar from '../Reusable Components/SearchBar/SearchBar';
import Card from '../Reusable Components/Card/Card';
import './customerstyle.css'
import Navbar from '../Reusable Components/Navbar/Navbar';
import InputField from '../Reusable Components/InputFields/InputField';
import Button from '../Reusable Components/Buttons/Button';
import Header from '../Reusable Components/Header/Header';
import Wave from './Images/wave.svg'
import Container from './Popup/Container';

import { Link } from 'react-router-dom';

function CustomerDashboard() {
 
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
  
const navigate = useNavigate()
initializeAuthentication();
const sign_Out = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Sign Out Successful')
      navigate('/')
    }).catch((error) => {
      // An error happened.
      
    });
} 

//onsubmit for popup button
const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
return (
  <div className='container-fluid'>CustomerDashboard
      <Navbar name1="Contact Us" name2="About Us" route1="/contactus" route2="/about" profileShow={true} />
     <img src={Wave} className="wave" />
<div className="dash-container container">
  <Button buttonText="Sign Out" style={{width:"120px"}} onClick={sign_Out} />
 
  <Link to={'/professionaldashboard'}> <Button buttonText="Professional Dashboard" style={{width:"220px"}}/></Link>

      {/* <SearchBar></SearchBar>
       making popup for post request here
      */}
          <Container triggerText={triggerText} onSubmit={onSubmit} />



      <Header text="Make work Easier with FixItNow" style={{marginTop:"3rem"}} /> 
    <div className="d-flex flex-row flex-wrap justify-content-center card-container" >
      {arrOfServices.map( serv => (
        <Card service={serv.Name}  ImageSrc={serv.Path}/>
      ))}
      </div>
</div>

      
  </div>
)
}

export default CustomerDashboard