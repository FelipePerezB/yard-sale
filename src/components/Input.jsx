import React from 'react'
import "@styles/Input.css"

function Input({children,type, name=""}) {
  return (
    <label>
      <span className="input-text">{children}</span>
      <input name={name} className="input" type={ type } />
    </label>
  )
}

export default Input
