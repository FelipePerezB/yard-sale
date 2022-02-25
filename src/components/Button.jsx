import React from 'react'
import "../styles/Button.css"

function Button({children, type="button"}) {
  return (
    <button className={ type }>{children}</button>    
  )
}

export default Button
