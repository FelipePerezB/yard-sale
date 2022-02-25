import React from 'react'
import "@styles/Input.css"

function Input({children,type}) {
  return (
    <label>
      <span className="input-text">{children}</span>
      <input className="input" type={ type } />
    </label>
  )
}

export default Input
