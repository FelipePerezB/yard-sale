import React from 'react'
import "../styles/Input.css"

function Input({children}) {
  return (
    <label>
      <span className="input-text">{children}</span>
      <input className="input" type="text" />
    </label>
  )
}

export default Input
