import React, { Component } from "react";
import Header from "../Header/Header";
import TagLine from "../TagLine/TagLine";
import Description from "../Description/Description";
import Numbers from "../Numbers/Numbers";
import BottomLeft from "../Circles/Botton-Left/BottomLeft";
import "./AboutUsWholePage.css";

function AboutUsWholePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-12 col-xs-12 col-md-12 c1">
          <Header></Header>
          <TagLine></TagLine>
          <Description></Description>
        </div>
        <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 c2">
          <Numbers></Numbers>
        </div>
        <div>
          <BottomLeft></BottomLeft>
        </div>
      </div>
    </div>
  );
}
export default AboutUsWholePage;
