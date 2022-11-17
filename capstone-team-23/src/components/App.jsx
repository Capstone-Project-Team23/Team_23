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

import ProfilePage from './ProfilePage/ProfilePage.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Notification from './Notification/Notification.jsx';
import 'react-toastify/dist/ReactToastify.css';

import SignUpProfessional from './SignUpProfessional/WholePage/SignUpProfessional.jsx';
import ProfilePageProfessional from './ProfilePageProfessional/ProfilePageProfessional.jsx';
import RequestMap from './RequestMap/RequestMap.jsx';
import ContactProfessional from './ContactProfessional/ContactProfessional.jsx';
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
<>
    <Router><div>
       <Routes>
       {/* <Route path="" element={loginStatus ? <CustomerDashboard /> : <Homepage/> } /> */}
       <Route path="" element={ <Homepage/> } />
       <Route path="/" exact element={<Homepage/>} />
       <Route path="/about" exact element={<AboutUsWholePage/>} />
       <Route path="/signUp" element={<SignUpPage/>} />
       <Route path="/contactUs" element={<ContactUS/>} />
       <Route path="/notification" element={<Notification/>} />
       <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/ProfilePageProfessional" element={<ProfilePageProfessional/>} /> 

       <Route path="/signUpProfessional" element={<SignUpProfessional/>} />

       <Route path="/customerdashboard" element = { loginStatus===true ? <CustomerDashboard /> : <SignUpPage/> } />
       <Route path="/professionaldashboard" element = { loginStatus===true ? <ProfessionalDashboard /> : <SignUpPage/> } />
       <Route path="/postrequest" element = { loginStatus===true ? < PostRequestForm/> : <SignUpPage/> } />
       <Route path="/login" element={<Login/>} />
       <Route exact path="/filterService" element={<FilterService/>} />
       <Route exact path="/requestMap" element={<RequestMap />} />
       <Route exact path="/contactprofessional" element={<ContactProfessional />} />
       </Routes>
      </div></Router>

      <ToastContainer position="top-right" autoClose={2000}  />
      </>

  )

}

export default App
