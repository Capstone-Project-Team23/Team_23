import React from 'react'
import './css/InputField.css'
function InputField(props) {
  return (



    <div style={{
      textAlign:"Center"
  }}>
        <input type={props.type} name={props.name} placeholder={props.placeholder} className="inputField" style={{width: props.width ,height:props.height}} />
    </div>
  )
}

export default InputField