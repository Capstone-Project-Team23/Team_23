import React from 'react'
import "./css/ShadowRect.css"
function ShadowRect(props) {
  return (
    <div className="rectangle-13"  style={props.style}>
        {props.html}
    </div>
  )
}

export default ShadowRect