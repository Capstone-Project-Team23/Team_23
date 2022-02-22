import React from 'react'
import './css/button.css'
function Button(props) {
  return (<>
  
    <button  className='login' style={{
        width:props.width,
        height:props.height
    }}>
        <span className="button-text" >{props.buttonText}</span>
    </button>
    </>)
}

export default Button