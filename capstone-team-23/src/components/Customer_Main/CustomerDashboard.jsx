import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase-init'
import {  useNavigate  } from 'react-router-dom'
import SearchBar from '../Reusable Components/SearchBar/SearchBar';
import Card from '../Reusable Components/Card/Card';

function CustomerDashboard() {
    
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
    <div>CustomerDashboard
        <button className='btn btn-primary' onClick={sign_Out}>Sign Out</button>
        <SearchBar></SearchBar>

        <p>Make work Easier with FixItNow</p>
        
          <Card></Card>
        
        
    </div>
  )
}

export default CustomerDashboard