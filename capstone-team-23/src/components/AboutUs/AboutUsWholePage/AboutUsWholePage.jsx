import React, { Component } from "react";
import Header from "../Header/Header";
import TagLine from "../TagLine/TagLine";
import Description from "../Description/Description";
import Numbers from "../Numbers/Numbers";
import BottomLeft from "../Circles/Botton-Left/BottomLeft";
import "./AboutUsWholePage.css";
import Navbar from "../../Reusable Components/Navbar/Navbar";
function AboutUsWholePage() {
  return (
    <div className="container row-container">
      <Navbar name1="Contact Us" name2="Login"  route1="contactus" route2=""/>
      <div className="row">
        <div className="col-lg-8 col-sm-12 col-xs-12 col-md-12 cc1">
          <Header></Header>
          <TagLine></TagLine>
          <Description></Description>
        </div>

        <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 cc2">
          <Numbers></Numbers>
        </div>
          
      </div>
      <BottomLeft></BottomLeft>
    </div>
  );
}
export default AboutUsWholePage;
