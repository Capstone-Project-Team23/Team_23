import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { chooseService } from "../../../redux/actions/ChooseServiceAction";
import Button from "../Buttons/Button";
import Header from "../Header/Header";
import GrassCutting from '../../Customer_Main/Images/GrassCutting.jpg'
import ElectricalServices from '../../Customer_Main/Images/ElectricalServices.jpg'
import './Card.css'
function Card(props){
  //let choosedService = useSelector(state => state.chooseService)  
  let dispatch = useDispatch();
  return(
     <div class="card card-con" style={{width: "18rem" , margin:'1rem'}  }>
  <img class="card-img-top" src={props.ImageSrc} alt="Card image cap"/>
  <div class="card-body mx-auto">
    <h5 class="card-title"> <Header text={props.service} style={{fontSize:"1.5rem"}} /> </h5>
    <Link to={'/filterService'} 
    onClick={() => dispatch(chooseService(props.service))}><Button buttonText="Find Professionals" style={{padding:".5rem", marginLeft:"-1rem"}}/></Link>
 
  </div>
</div> 
    
    )
}

export default Card;