import React from 'react'
import "@styles/Search.css"

import lens from "@icons/lens.svg"

function Search() {
  return (
    <div className='Search'>
      <img src={lens}  className="Search__img" />
      <input placeholder='Search product...' className='SearchInput' />
    </div>    
  )
}

export default Search
