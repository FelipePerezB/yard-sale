import React from 'react'
import "@styles/Button.css"
import useReedirect from '../hooks/useReedirect'

// const reedirect=(m)=>{
//   console.log(m)
// }

const createId=()=>{
  console.log("hola")
}

function Button(
  {
    children, 
    buttonFunction, 
    type="button", 
    buttonClass="button",
  }){

  return (
    <button
      onClick={ buttonFunction }
      type={type}  
      className={ buttonClass }>
        {children}
    </button>    
  )
}

export default Button
