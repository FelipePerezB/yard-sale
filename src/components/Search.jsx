import React from 'react'
import "../styles/Search.css"

function Search() {
  return (
    <div className='Search'>
      <span className='SearchImg' ></span>
      <input placeholder='Search product...' className='SearchInput' />
    </div>    
  )
}

export default Search
