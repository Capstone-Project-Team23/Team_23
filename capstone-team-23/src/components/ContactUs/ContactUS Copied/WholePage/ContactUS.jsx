import React from "react";

import Navbar from "../../../Reusable Components/Navbar/Navbar";

import Header from "../../../Reusable Components/Header/Header";

import ellipse from "./css/Ellipse 5.svg";
import ContactForm from "../../ContactUsForm/ContactForm";
import "./css/WholePage.css";
import Label from "../../../Reusable Components/Label/Label";
import fb from './css/fb.svg'
import insta from './css/insta.svg'
import twit from './css/twit.svg'
import {styleHeader_ContactUs, styleHeader_ContactUs_mobile, email_style} from'./contactusstyle'
function ContactUs(props) {

  return (
    <div className="container-fluid">
      <div>
        <Navbar name1="About" name2="Login" route1="/about" route2="/login"/>
      </div>

      <br></br>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 contactus-col-1">
          <div className="desc-container">
          <Header text="Contact Us" style={ window.innerWidth<480 ? styleHeader_ContactUs_mobile :styleHeader_ContactUs } />
        <span className="plusOne">+1 <span className="other">1234567890</span></span>
        <Label style={email_style} name="admin@fixitnow.com"/>
        <ul className="social-list">
          <li className="social-list-item"><img className="twit" src={twit} alt="" /></li>
          <li className="social-list-item"><img src={fb} alt="" /></li>
          <li className="social-list-item"><img  src={insta} alt="" /></li>
        </ul>

          </div>
        
        </div>

        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 contactus-col-2">
          <ContactForm />
        </div>
      </div>

      {/* <img className='img' src={image} alt="" /> */}
      <img className="imgEllipse" src={ellipse} alt="" />
    </div>
  );
}

export default ContactUs;
