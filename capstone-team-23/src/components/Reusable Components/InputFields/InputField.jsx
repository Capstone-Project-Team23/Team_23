import React from 'react'
import './css/InputField.css'
function InputField(props) {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} className="inputField form-control" 
        style={{width: props.width ,height:props.height}}/>
    </div>
  )
}

export default InputField