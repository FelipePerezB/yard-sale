import React from 'react'
import "../styles/LinkButton.css"

function LinkButton({children}) {
  return (
    <div className='link-button-container'>
      <a href="/">{children}</a>
    </div>
  )
}

export default LinkButton
