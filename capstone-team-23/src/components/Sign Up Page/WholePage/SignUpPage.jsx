import React, { useState, useEffect } from 'react'
import InputField from '../../Reusable Components/InputFields/InputField'
import Label from '../../Reusable Components/Label/Label'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import ShadowRect from '../../Reusable Components/ShadowRectContainer/ShadowRect'
import Buttonn from '../../Reusable Components/Buttons/Button'
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
import {style, styleHeader, labelStyle, styleFooter, styleLogin, styleWindows, styleGoogle,styleInvalid} from './css/style.js'





// function SignUpPage(props) {
//   //authentication logic
//   initializeAuthentication();
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   const [isUserSignedIn, setIsUserSignedIn] = useState(true)
//   const navigate = useNavigate ()
//   const handleGoogleSignIn = () => {
//     if(!isUserSignedIn) {
//       signInWithPopup(auth, provider)
//       .then(result => {
//         //console.log(result)
//         const user = result.user
//       }).catch((error) => {
//         console.log(error)
//       })
//     } 
//   }
//   onAuthStateChanged( auth ,(user) => {
//     if(user) {
//       console.log(user)
//       return setIsUserSignedIn(true)     
      
//     }

//     setIsUserSignedIn(false)
//   })
//  // console.log(isUserSignedIn)

//   if(isUserSignedIn) {
//     navigate('/customerdashboard')
//   }
//   // authentication logic ends

//   const selection = useSelector(state => state.selection)

//   const html = [
//     <Header text={"Sign Up as " + selection} style={styleHeader} />,
//     <br></br>,
//     <Label  style={labelStyle} name="First Name" />,
//     <InputField placeholder="John" width="250px"/>,
//     <br></br>,
//     <Label  style={labelStyle}  name="Last Name" />,
//     <InputField placeholder="Doe" width="250px"/>,
//     <br></br>,
//     <Label  style={labelStyle}  name="Email" />,
//     <InputField placeholder="John@gmail.com" width="250px"/>,
//     <br></br>,
//     <Label   style={labelStyle}  name="Password" />,
//     <InputField placeholder="********" type="password"width="250px" />,
//     <br></br>,
//     <Label  style={labelStyle}  name="Confirm Password" width="250px" />,
//     <InputField placeholder="********"  width="250px" type="password" />,
//     <br></br>,
//     <Button buttonText="Sign Up" width="250px" style={{
//       width:"250px"
//     }} />,
//     <Header text="Already have account?" style={styleFooter}/>,
//     <a  href="#"><Header text="Login" style={styleLogin}/></a>,
//     <a  href="#" onClick={handleGoogleSignIn} ><GoogleButton  style={styleGoogle} /></a>
//   ]

//   return (
//     <div className='container-fluid'>
//       <Navbar name1="Contact Us"  name2="About" route1="/contactus" route2="/about"/>
//     <div className='row'>
//        <div className='col-xs-12 col-sm-6 col-md-8 col-lg-6 space-container'>
//          <div className='space'></div>
//          <ShadowRect style={ window.innerWidth<480 ? style : styleWindows } html={html} key={1} />
//        </div>
      
//     </div>
   
//          <img className='img' src={image} alt="" />
//          <img className='imgEllipse' src={ellipse} alt="" />
//        </div>
    
//   )
// }

// export default SignUpPage
//import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

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

    const html =[
      <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
          <Label  style={labelStyle} name="First Name" />
              <input
                  placeholder='First Name'
                  type="text"
                  className="inputField"
                  style={{width: "250px"}}
                  {...register("firstName", { required: true, maxLength: 15 })}
              />
          </Form.Field>
          {errors.firstName && <p style={styleInvalid}>*Please Enter your First Name</p>}
          <Form.Field>
              <Label  style={labelStyle}  name="Last Name" />
              <input
                  placeholder='Last Name'
                  type="text"
                  className="inputField"
                  style={{width: "250px"}}
                  {...register("lastName", { required: true, maxLength: 15 })}
              />
          </Form.Field>
          {errors.lastName && <p style={styleInvalid}>*Please Enter your Last Name</p>}
          <Form.Field>
          <Label  style={labelStyle}  name="Email" />
              <input
                  placeholder='Email'
                  type="email"
                  className="inputField"
                  style={{width: "250px"}}
                  {...register("email",
                      {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
              />
          </Form.Field>
          {errors.email && <p style={styleInvalid}>*Please Enter Valid Email</p>}
          <Form.Field>
          <Label   style={labelStyle}  name="Password" />
              <input
                  placeholder='Password'
                  type="password"
                  className="inputField"
                  style={{width: "250px"}}
                  {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })}
              />
          </Form.Field>
          {errors.password && <p style={styleInvalid}>*Please check the Password</p>}
          <br></br>
          <Buttonn buttonText="Sign Up" width="250px" style={{
          width:"250px"
          }} />

<Header text="Already have account?" style={styleFooter}/>
     <a  href="#"><Header text="Login" style={styleLogin}/></a>,
     <a  href="#" onClick={handleGoogleSignIn} ><GoogleButton  style={styleGoogle} /></a>
      </Form>
  </div>
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