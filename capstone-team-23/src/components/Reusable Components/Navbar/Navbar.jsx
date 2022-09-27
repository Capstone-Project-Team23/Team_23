import React from 'react'
import CompanyLogo from '../CompanyLogo/CompanyLogo'
import Button from '../Buttons/Button'
import { Link } from 'react-router-dom';


function Navbar(props) {
  const style = {
    padding:"8px",
    width:"150px",
    color: "rgba(29, 33, 78, 1)"
  }

  var button;

  if (props.show =="true") {
    button = <li className="nav-item">
    <Link className="nav-link" to={props.route3}><Button buttonText={props.name3} style={style} /></Link>
  </li>;
  } 

  return (
    <div className='container-custom' >
      
        <nav className="navbar navbar-expand-md navbar-light  bg-white fixed-top py-3">
  <a className="navbar-brand px-5" href="/"><CompanyLogo className="companyLogo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end px-5 " id="navbarNav">
    <ul className="navbar-nav px-5 ">
    {button}
      <li className="nav-item">
        <Link className="nav-link" to={props.route1}><Button buttonText={props.name1} style={style} /></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={props.route2}><Button buttonText={props.name2}  style={style}/></Link>
      </li>
    </ul>
  </div>
</nav>

    </div>
    
  )
}

export default Navbar