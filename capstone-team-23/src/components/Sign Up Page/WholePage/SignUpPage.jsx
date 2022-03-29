import React, { useState, useEffect } from 'react'
import InputField from '../../Reusable Components/InputFields/InputField'
import Label from '../../Reusable Components/Label/Label'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import ShadowRect from '../../Reusable Components/ShadowRectContainer/ShadowRect'
import Button from '../../Reusable Components/Buttons/Button'
import Header from '../../Reusable Components/Header/Header'
import GoogleButton from '../GoogleLink/GoogleButton'
import image from './css/Vector.svg'
import ellipse from './css/Ellipse 5.svg'
import './css/WholePage.css'
import {useSelector} from 'react-redux';
import initializeAuthentication from '../../../firebase/firebase-init'
import {GoogleAuthProvider ,getAuth, signInWithPopup , onAuthStateChanged} from 'firebase/auth'
import firebaseConfig from '../../../firebase/firebase'
import { Link, Route, useNavigate  } from 'react-router-dom'
import CustomerDashboard from '../../Customer_Main/CustomerDashboard'
import {style, styleHeader, labelStyle, styleFooter, styleLogin, styleWindows, styleGoogle} from './css/style.js'





function SignUpPage(props) {
  //authentication logic
  initializeAuthentication();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  const navigate = useNavigate ()
  const handleGoogleSignIn = () => {
    if(!isUserSignedIn) {
      signInWithPopup(auth, provider)
      .then(result => {
        //console.log(result)
        const user = result.user
      }).catch((error) => {
        console.log(error)
      })
    } 
  }
  onAuthStateChanged( auth ,(user) => {
    if(user) {
      console.log(user)
      return setIsUserSignedIn(true)     
      
    }

    setIsUserSignedIn(false)
  })
 // console.log(isUserSignedIn)

  if(isUserSignedIn) {
    navigate('/customerdashboard')
  }
  // authentication logic ends

  const selection = useSelector(state => state.selection)

  const html = [
    <Header text={"Sign Up as " + selection} style={styleHeader} />,
    <br></br>,
    <Label  style={labelStyle} name="First Name" />,
    <InputField placeholder="John" width="250px"/>,
    <br></br>,
    <Label  style={labelStyle}  name="Last Name" />,
    <InputField placeholder="Doe" width="250px"/>,
    <br></br>,
    <Label  style={labelStyle}  name="Email" />,
    <InputField placeholder="John@gmail.com" width="250px"/>,
    <br></br>,
    <Label   style={labelStyle}  name="Password" />,
    <InputField placeholder="********" type="password"width="250px" />,
    <br></br>,
    <Label  style={labelStyle}  name="Confirm Password" width="250px" />,
    <InputField placeholder="********"  width="250px" type="password" />,
    <br></br>,
    <Button buttonText="Sign Up" width="250px" style={{
      width:"250px"
    }} />,
    <Header text="Already have account?" style={styleFooter}/>,
    <a  href="#"><Header text="Login" style={styleLogin}/></a>,
    <a  href="#" onClick={handleGoogleSignIn} ><GoogleButton  style={styleGoogle} /></a>
  ]

  return (
    <div className='container-fluid'>
      <Navbar name1="Contact Us"  name2="About" route1="/contactus" route2="/about"/>
    <div className='row'>
       <div className='col-xs-12 col-sm-6 col-md-8 col-lg-6 space-container'>
         <div className='space'></div>
         <ShadowRect style={ window.innerWidth<480 ? style : styleWindows } html={html} key={1} />
       </div>
      
    </div>
   
         <img className='img' src={image} alt="" />
         <img className='imgEllipse' src={ellipse} alt="" />
       </div>
    
  )
}

export default SignUpPage