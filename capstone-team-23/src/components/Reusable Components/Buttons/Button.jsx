import React from 'react'
import Header from '../Header/Header'
import './css/button.css'
function Button(props) {
  return (<span style={{
      textAlign:"Center"
  }}>
  
    <button  className='login btn' style={props.style} onClick={props.onClick}>
        {/* <span className="" >{props.buttonText}</span> */}
        <Header text={props.buttonText} style={{fontSize:"1rem"}} />
    </button>
    </span>)
}

export default Button