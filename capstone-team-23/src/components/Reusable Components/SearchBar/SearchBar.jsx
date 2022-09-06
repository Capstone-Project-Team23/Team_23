import React from 'react'

function SearchBar(){
    return(
    <div className="input-group  mx-auto">
  <input type="search" className="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-success">search</button>
</div>
  )
}

export default SearchBar;