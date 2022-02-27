import React from 'react'
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


function App() {

  return (

    <Router><div>
      <Link to="/about">Home</Link>
       <Routes>
       <Route path="" element={<Homepage/>} />
       <Route path="/" exact element={<Homepage/>} />
       <Route path="/about" exact element={<AboutUsWholePage/>} />
       <Route path="/signUp" element={<SignUpPage/>} />
       <Route path="/contactUs" element={<ContactUS/>} />
       </Routes>
      </div></Router>

  )

}

export default App
