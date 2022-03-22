import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {onAuthStateChanged, getAuth} from 'firebase/auth'
import ContactUS from './ContactUs/ContactUS Copied/WholePage/ContactUS.jsx'
import Homepage from './Home Page/WholePage/HomePage.jsx'
import SignUpPage from './Sign Up Page/WholePage/SignUpPage.jsx'
import AboutUsWholePage from './AboutUs/AboutUsWholePage/AboutUsWholePage.jsx'

import CustomerDashboard from './Customer_Main/CustomerDashboard.jsx';
import Login from './Login/WholePage/Login.jsx';


function App() {
 
  return (

    <Router><div>
       <Routes>
       <Route path="" element={<Homepage/>} />
       <Route path="/" exact element={<Homepage/>} />
       <Route path="/about" exact element={<AboutUsWholePage/>} />
       <Route path="/signUp" element={<SignUpPage/>} />
       <Route path="/contactUs" element={<ContactUS/>} />

       <Route path="/customerdashboard" element = {<CustomerDashboard />} />

       <Route path="/login" element={<Login/>} />

       </Routes>
      </div></Router>

  )

}

export default App
