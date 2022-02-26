import React from 'react'
import CompanyLogo from '../CompanyLogo/CompanyLogo'
import Button from '../Buttons/Button'

function Navbar(props) {
  const style = {
    padding:"8px",
    width:"120px",
    color: "rgba(29, 33, 78, 1)"
  }
  return (
    <div className='mainContainer-SignUpPage'>
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light flex-navbar navbar-custom bg-transparent  fixed-top py-4 nav-custom">
  <a class="navbar-brand" href="#"><CompanyLogo className="companyLogo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#"><Button buttonText={props.name1} style={style} /></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Button buttonText={props.name2}  style={style}/></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar