import React from 'react'
import './css/Header.css'
function Header(props) {
  return (
    <div className='Header-container'>
        <p className='Header' style={props.style}>{props.text}</p>
        </div>
  )
}

export default Header