import React from 'react'
import "@styles/LinkButton.css"

function LinkButton({children, href}) {
  return (
    <div className='link-button-container'>
      <a href={ href }>{children}</a>
    </div>
  )
}

export default LinkButton
