import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase-init'
import {  useNavigate  } from 'react-router-dom'
import SearchBar from '../Reusable Components/SearchBar/SearchBar';
import Card from '../Reusable Components/Card/Card';
import './customerstyle.css'
function CustomerDashboard() {
 
 const arrOfServices = ['Grass Cutting', 'Plumbing', 'Home Cleaning', 'Window Cleaning', 'Electrical Service' , 'Landscapping' , 'General Construction', 'Pest Control', 'Laundry' , 'Welding', 'Home Repairs'] 
  
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
return (
  <div className='container-fluid'>CustomerDashboard
      <button className='btn btn-primary' onClick={sign_Out}>Sign Out</button>
      <SearchBar></SearchBar>
      <p>Make work Easier with FixItNow</p>
    <div className="d-flex flex-row flex-wrap justify-content-center card-container" >
      {arrOfServices.map( serv => (
        <Card service={serv} />
      ))}
      </div>
  </div>
)
}

export default CustomerDashboard