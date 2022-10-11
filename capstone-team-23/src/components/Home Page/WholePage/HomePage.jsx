import React from 'react'
import {
  Link, Outlet
} from 'react-router-dom';
// import InputField from './Reusable Components/InputFields/InputField'
// import Label from './Reusable Components/Label/Label'
// import CompanyLogo from './Reusable Components/CompanyLogo/CompanyLogo'
// import Button from './Reusable Components/Buttons/Button'
import Slogan from '../Slogan/Slogan'
import Navbar from '../../Reusable Components/Navbar/Navbar.jsx'
import SignupLine from '../SignupLine/SignupLine'
import './HomePage.css'
import circle from '../SignupLine/circle.svg'
import Man1 from './Man1.svg'
import Man2 from './Man2.svg'
import Vector from './Vector.svg'
import Wave from './wave.svg'
import {useState} from 'react'
import AboutUsWholePage from '../../AboutUs/AboutUsWholePage/AboutUsWholePage';

function HomePage() {
{/* <img className='circle' src={circle}></img> */}
      
      {/* <AboutUsWholePage /> */}
   
      {/* <img className='Man' src={Man1}></img>
  
      <img className='wave' src={Wave}></img> */}
  return (
    <div className='container-fluid'>

      <Navbar name1="About Us" name2="Login" route1="/about" route2="/login" show = "true" name3="Contact Us" route3="/contactus"/>
      <div className='row row-custom  '>
        {/* <div className="col-xs-12 col-sm-12 col-lg-6 c1">
          
        <div className='slogan-div'><Slogan /></div>
        <SignupLine />
        </div> */}
       <div className="col-xs-12 col-sm-12 col-lg-12 c1 ">
       <div className='slogan-div'><Slogan /></div>
       <SignupLine />
       
       </div>
      </div>
      <img className='img homeimg' src={Vector} alt="" />    
      </div>
      
  )
}

export default HomePage