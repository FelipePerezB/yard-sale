import React from 'react'
import styles from "../styles/Input.module.css"


function Input({children,type, placeholder, name="", isReadOnly=false, inputFunction, id}) { 
  const text = "felipe"
  // const style = {
  //   placeholder:""
  // }
  // const n = Math.random()*100
  // id = (id) ? id : "input-"+Math.floor(n)

  return (
    <label id={id+"-label"}>
      <span className={styles["input-text"]}>{children}</span>
      <input 
        id={id}
        // onLoad={putText(id)}
        onLoad={()=>inputFunction}
        // id={id}
        readOnly={isReadOnly}
        placeholder={placeholder} 
        name={name} 
        className={styles["input" ]}
        type={ type } 
      />
    {/* {
      setTimeout(()=>(putText()),100)
    } */}
    </label>
  )
}

export default Input
