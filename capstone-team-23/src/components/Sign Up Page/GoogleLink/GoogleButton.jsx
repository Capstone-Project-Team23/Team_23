import React from 'react'
import './css/google.css'
function GoogleButton(props) {
  return (
    <div className="google-sign" style={props.style}>
    <p className="txt-0510 flex-hcenter">Continue with Google</p>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/QE5TPT2UP2aO0ai2arHrKx-81%3A325?alt=media&token=4764e6db-1827-4aad-a2ee-6bf06330799c"
      alt="image not found"
      className="google-1"
    />
  </div>

  )
}

export default GoogleButton