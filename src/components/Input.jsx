import React from 'react';
import styles from "../styles/Input.module.css";


function Input({children,type, placeholder, name="", isReadOnly=false, inputFunction, id}) { 
  return (
    <label id={id+"-label"}>
      <span className={styles["input-text"]}>{children}</span>
      <input 
        id={id}
        onLoad={()=>inputFunction}
        readOnly={isReadOnly}
        placeholder={placeholder} 
        name={name} 
        className={styles["input" ]}
        type={ type } 
      />
    </label>
  );
};

export default Input;
