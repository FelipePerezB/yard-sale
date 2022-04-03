import React from 'react';
import styles from "../styles/Button.module.css";
import Link from 'next/link';

function Button(
  {
    url="",
    children, 
    buttonFunction, 
    type="button", 
    buttonClass,
  }){

  return (
    <Link href={url} passHref>
      <button
        onClick={ buttonFunction }
        type={type}  
        className={styles[buttonClass]}>
          {children}
      </button>    
    </Link>
  );
};

export default Button;
