import React from 'react'
import InputField from '../../../Reusable Components/InputFields/InputField'
import Label from '../../../Reusable Components/Label/Label'
import Navbar from '../../../Reusable Components/Navbar/Navbar'
import ShadowRect from '../../../Reusable Components/ShadowRectContainer/ShadowRect'
import Button from '../../../Reusable Components/Buttons/Button'
import Header from '../../../Reusable Components/Header/Header'
import image from './css/Vector.svg'
import ellipse from './css/Ellipse 5.svg'
import './css/WholePage.css'
function SignUpPage(props) {
 
  const style = {
    width:"345px",
    height:"auto",
    margin : "120px auto"
  }
  const styleHeader = {
    
    fontSize: "36px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    color: "rgba(47, 46, 65, 1)",
    width: "284px",
    wordWrap: "break-word"
  }
  const labelStyle = {
    marginLeft:"20px"
  }
  // const styleFooter = {
  //   margin:"auto",
  //   marginTop:"10px",
  //   textAlign:"Center",
  //   fontSize:".9em",
  // }
  

  const Hed = [
    <p>
        Send <span className="styleSpann">M</span>essage
    </p>
  ]

  const rightContainer = {
    fontSize: "48px",
    fontFamily: "poppins, sans-serif",
    fontWeight: "700",
    color: "rgba(4, 215, 162, 1)",
    width: "336px",
    wordWrap: "break-word"

  }

  const html = [
    <Header text={Hed} style={styleHeader} />,
    <br></br>,
    <Label  style={labelStyle} name="Full Name" />,
    <InputField placeholder="John Cena" width="250px"/>,
    <br></br>,
    <Label  style={labelStyle}  name="Email" />,
    <InputField placeholder="John@gmail.com" width="250px"/>,
    <br></br>,
    <Label  style={labelStyle}  name="Number" />,
    <InputField placeholder="###-###-####" width="250px"/>,
    <br></br>,
    <Button buttonText="Send" width="250px" />,
  ]
////////////////Left Section/////////////////
  const HedLeft = [
    <p>
        <span className="styleSpann">Contact US</span>
    </p>
  ]

  const NumberLeft = [
    <p>
        <span className="styleSpann">+1</span> 1234567890
    </p>
  ]
  const htmlLeft = [
    <Header text={HedLeft} style={styleHeader} />,
    <br></br>,
    <Header text={NumberLeft} style={styleHeader} />,
    <p className="emailLeft">admin@fixitnow.com</p>

   
  ]

  const styleLeft = {
    paddingLeft:"20%",
    width:"100%",
    height:"auto",
    margin : "120px auto"
  }
  /////////////////Left End////////////////////////////////
  return (
    <div className='container-fluid'>
      <div><Navbar name1="Contact Us"  name2="About"/></div>
      
            <br></br>

            
        <div className='row' >
          
        <div className='col-xs-12 col-sm-6 col-md-8 col-lg-6'>
              
             <ShadowRect style={styleLeft} html={htmlLeft} />
           
          </div>
         
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