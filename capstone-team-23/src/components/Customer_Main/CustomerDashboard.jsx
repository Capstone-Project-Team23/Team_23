import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase-init'
import {  useNavigate  } from 'react-router-dom'

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
      //ok
    });
} 
  return (
    <div>CustomerDashboard
        <button className='btn btn-primary' onClick={sign_Out}>Sign Out</button>
    </div>
  )
}

export default CustomerDashboard