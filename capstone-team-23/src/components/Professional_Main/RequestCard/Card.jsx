import React from 'react'
import './Card.css'
import {useSelector, useDispatch} from 'react-redux'
function Card({Name,description,New ,location, src, service, postedAt, Budget}) {

  return (
    <div className='card-container'>
        <span className="side"></span>
<div className="photo-desc-container">
        <div className="photo">
    <img src={src} alt="" className="companyImg" />
        </div>
     
     <div className="otherThanPhoto">
     <div className="company-new-featured-container">
            <p className="companyName">{Name}</p>
            {New ?<p className="New">NEW</p> :'' }
            {<p className="featured">{Budget}</p>}
        </div>

        <p className="job-title">{service}</p>

        <div className="job-char-container">
            <p className="day">{postedAt}</p>
            <p className="job-type">{location}</p>
            <p className="job-location">{}</p>
        </div>
 <hr className='hr' />

     </div>
     </div>
     <div className="tags-container">
            {/* {
            languages.map(lang => (
                <p key={lang} className="tag-item">{lang}</p>
            ))
            } */}
            {description}
        </div>
    </div>
  )
}

export default Card