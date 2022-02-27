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
import Man from './Man.svg'
import Wave from './wave.svg'
function HomePage() {

  return (
    <div className='container-fluid'>
      <img className='Man' src={Man}></img>
      <img className='wave' src={Wave}></img>
      <Navbar name1="About Us" name2="Login" route1="/about" route2="/"/>
      <div className='row row-custom'>
        <div className="col-xs-12 col-sm-12 col-lg-6 c1">
        <div className='slogan-div'><Slogan /></div>
        <SignupLine />
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 c2">

        </div>
      </div>
      <img className='circle' src={circle}></img>
      <Outlet/> </div>
      
  )
}

export default HomePage