import React from 'react'
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
function SignUpPage(props) {
 
  const style = {
    width:"345px",
    height:"750px",
    margin : "120px auto"
  }
  const styleHeader = {
    fontSize:"1.5em",
    marginTop:"10px",
    marginButton:"10px"
  }
  const labelStyle = {
    marginLeft:"20px"
  }
  const styleFooter = {
    margin:"auto",
    marginTop:"10px",
    textAlign:"Center",
    fontSize:".9em",
  }
  const styleLogin = {
    textAlign:"Center",
    color:"#04D7A2",
    fontSize:".9em",
  }
  const styleGoogle = {
    marginTop:"30px",
    textAlign:"Center",
  
    
  }
  const html = [
    <Header text={"Sign Up as " + "Props"} style={styleHeader} />,
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
    <Button buttonText="Sign Up" width="250px" />,
    <Header text="Already have account?" style={styleFooter}/>,
    <a  href="#"><Header text="Login" style={styleLogin}/></a>,
    <a  href="#"><GoogleButton style={styleGoogle} /></a>
  ]

  return (
    <div className='container-fluid'>
      <Navbar name1="Contact Us"  name2="About"/>
    <div className='row'>
       <div className='col-xs-12 col-sm-6 col-md-8 col-lg-6'>
         <ShadowRect style={style} html={html} />
       </div>
      
    </div>
   
         <img className='img' src={image} alt="" />
         <img className='imgEllipse' src={ellipse} alt="" />
       </div>
    
  )
}

export default SignUpPage