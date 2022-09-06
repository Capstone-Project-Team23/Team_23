import React from 'react'
import Header from '../Header/Header'
import './css/button.css'
function Button(props) {
  return (<div style={{
      textAlign:"Center"
  }}>
  
    <button  className='login btn' style={props.style} onClick={props.onClick}>
        {/* <span className="" >{props.buttonText}</span> */}
        <Header text={props.buttonText} style={{fontSize:"1rem"}} />
    </button>
    </div>)
}

export default Button