import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { chooseService } from "../../../redux/actions/ChooseServiceAction";
function Card(props){
  //let choosedService = useSelector(state => state.chooseService)  
  let dispatch = useDispatch();
  return(
     <div class="card" style={{width: "18rem" , margin:'1rem'}  }>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1621077699198-692f1cc0173d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.service}</h5>
    <Link to={'/filterService'} class="btn btn-primary" 
    onClick={() => dispatch(chooseService(props.service))}>Find Professionals</Link>
 
  </div>
</div>
    
    )
}

export default Card;