import React from 'react'
import './css/button.css'
function Button(props) {
  return (<div style={{
      textAlign:"Center"
  }}>
  
    <button  className='login btn' style={props.style}>
        <span className="" >{props.buttonText}</span>
    </button>
    </div>)
}

export default Button