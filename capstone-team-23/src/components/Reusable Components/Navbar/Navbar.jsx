import React from 'react'
import CompanyLogo from '../CompanyLogo/CompanyLogo'
import Button from '../Buttons/Button'
function Navbar(props) {
  return (
    <div className='mainContainer-SignUpPage'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light flex-navbar navbar-custom  fixed-top py-4 nav-custom">
  <a class="navbar-brand" href="#"><CompanyLogo className="companyLogo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#"><Button buttonText={props.name1} width="120px" /></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Button buttonText={props.name2} width="120px"/></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar