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
import PostRequestForm from './PostRequest/PostRequestForm.jsx';
import CustomerDashboard from './Customer_Main/CustomerDashboard.jsx';
import ProfessionalDashboard from '../components/Professional_Main/ProfessionalDashboard.jsx'
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
  let selection = useSelector(state => state.selection)
  const dispatch = useDispatch()
  //console.log(isLoggedIn)
 console.log("Test "+selection)
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

       {/* <Route path="/dashboard" element = {(loginStatus===true && selection==="Customer") ? <CustomerDashboard /> : (loginStatus===true && selection==="Professional") ? <ProfessionalDashboard/> : <SignUpPage/> } /> */}
       <Route path="/customerdashboard" element = { loginStatus===true ? <CustomerDashboard /> : <SignUpPage/> } />
       <Route path="/postrequest" element = { loginStatus===true ? < PostRequestForm/> : <SignUpPage/> } />
       {/* <Route path="/professionaldashboard" element = {(loginStatus===true && selection==="Professional") ? <ProfessionalDashboard /> : <SignUpPage/> } /> */}
       <Route path="/login" element={<Login/>} />
       <Route exact path="/filterService" element={<FilterService/>} />
       </Routes>
      </div></Router>

  )

}

export default App
