import React from 'react'
import "@styles/Subtitle.css"

function Subtitle({children}) {
  return (
    <h1 className='subtitle' >
      {children}
    </h1>    
  )
}

export default Subtitle
