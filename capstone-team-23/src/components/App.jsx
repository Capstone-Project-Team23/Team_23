import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ContactUS from './ContactUs/ContactUS Copied/WholePage/ContactUS.jsx'
import Homepage from './Home Page/WholePage/HomePage.jsx'
import SignUpPage from './Sign Up Page/WholePage/SignUpPage.jsx'
import AboutUsWholePage from './AboutUs/AboutUsWholePage/AboutUsWholePage.jsx'

import CustomerDashboard from './Customer_Main/CustomerDashboard.jsx';
import Login from './Login/WholePage/Login.jsx';
import FilterService from './FilterService/FilterService.jsx';
import { useDispatch, useSelector } from "react-redux"
import initializeAuthentication from '../firebase/firebase-init'
import {GoogleAuthProvider ,getAuth, signInWithPopup , onAuthStateChanged} from 'firebase/auth'
import { Not_Authenticated, Yes_Authenticated } from '../redux/actions/AuthenticatedAction.js';
function App() {
  
  initializeAuthentication();
  const auth = getAuth();
  let loginStatus = useSelector(state => state.isAuthenticated)
  const dispatch = useDispatch()
  //console.log(isLoggedIn)

  onAuthStateChanged( auth ,(user) => {
    if(user) {  
      dispatch(Yes_Authenticated())
      console.log(`User ${loginStatus}`)
    }else {
      dispatch(Not_Authenticated())
      console.log(`User ${loginStatus}`)
    }
  })


  return (

    <Router><div>
       <Routes>
       <Route path="" element={loginStatus ? <CustomerDashboard /> : <Homepage/> } />
       <Route path="/" exact element={<Homepage/>} />
       <Route path="/about" exact element={<AboutUsWholePage/>} />
       <Route path="/signUp" element={<SignUpPage/>} />
       <Route path="/contactUs" element={<ContactUS/>} />

       <Route path="/customerdashboard" element = {loginStatus ? <CustomerDashboard /> : <SignUpPage/> } />

       <Route path="/login" element={<Login/>} />
       <Route exact path="/filterService" element={<FilterService/>} />
       </Routes>
      </div></Router>

  )

}

export default App
