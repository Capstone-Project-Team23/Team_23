import React from 'react'
import InputField from '../../Reusable Components/InputFields/InputField'
import Label from '../../Reusable Components/Label/Label'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import ShadowRect from '../../Reusable Components/ShadowRectContainer/ShadowRect'
import Buttonn from '../../Reusable Components/Buttons/Button'
import Header from '../../Reusable Components/Header/Header'
import GoogleButton from '../../Sign Up Page/GoogleLink/GoogleButton'
import image from './css/Vector.svg'
import ellipse from './css/Ellipse 5.svg'
import './css/WholePage.css'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {style, styleHeader, labelStyle, styleFooter, styleLogin, styleWindows, styleGoogle,styleInvalid,labelStyleLogin} from '../../Sign Up Page/WholePage/css/style'

function Login(props) {
  
  const styleWindows = {
    width:"22rem",
    height:"auto",
    margin : "120px 14rem"
  }

  const style = {
    width:"22rem",
    height:"auto",
    margin : "120px auto"
  }
  const styleHeader = {
    fontSize:"1.5em",
    marginTop:"10px",
    marginButton:"10px",
    textAlign:"center"
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
  // const html = [
  //   <Header text={"Login "} style={styleHeader} />,
  //   <br></br>,
    
 
  //   <Label  style={labelStyle}  name="Email" />,
  //   <InputField placeholder="John@gmail.com" width="250px"/>,
  //   <br></br>,
  //   <Label   style={labelStyle}  name="Password" />,
  //   <InputField placeholder="********" type="password"width="250px" />,
  //   <br></br>,

  //   <Button buttonText="Login" width="250px" style={{
  //     width:"250px"
  //   }} />,
    // <Header text="Don't have an account?" style={styleFooter}/>,
    // <a  href="#"><Header text="Sign Up" style={styleLogin}/></a>,
    // <a  href="#"><GoogleButton style={styleGoogle} /></a>
  // ]
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
}
  const html = [
    <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
       <Form.Field>
        <Label  style={labelStyleLogin}  name="Email" />
            <input
                placeholder='Email'
                type="email"
                className="inputField"
                style={{width: "250px",marginLeft: "20px"}}
                {...register("email",
                    {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
            />
        </Form.Field>
        {errors.email && <p style={styleInvalid}>*Please Enter Valid Email</p>}
        <br></br>
        
        <Form.Field>
        <Label   style={labelStyleLogin}  name="Password" />
        <input
                  placeholder='Password'
                  type="password"
                  className="inputField"
                  style={{width: "250px",marginLeft: "20px"}}
                  {...register("password", {
                      required: true
                  })}
              />
        </Form.Field>
        {errors.password && <p style={styleInvalid}>*Please enter Password</p>}
          <br></br>

        <Buttonn buttonText="Login" width="250px" style={{
        width:"250px",marginLeft: "20px"
        }} />
        
    </Form>
    <br></br>
    <Header text="Don't have an account?" style={styleFooter}/>
    <a  href="#"><Header text="Sign Up" style={styleLogin}/></a>
    <a  href="#"><GoogleButton style={styleGoogle} /></a>
</div>


  ]

  return (
    <div className='container-fluid'>
      <Navbar name1="Contact Us"  name2="About" route1="contactus" route2="about"/>
    <div className='row'>
       <div className='col-xs-12 col-sm-6 col-md-8 col-lg-6 space-container'>
         <div className='space'></div>
         <ShadowRect style={ window.innerWidth<480 ? style : styleWindows } html={html} />
       </div>
      
    </div>
   
         <img className='img' src={image} alt="" />
         <img className='imgEllipse' src={ellipse} alt="" />
       </div>
    
  )
}

export default Login;