import React from 'react'
import './css/Label.css';
function Label(props) {
  return (
    <div>
        <p className='name'>{props.name}</p>
        </div>
  )
}

export default Label