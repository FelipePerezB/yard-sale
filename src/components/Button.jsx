import React from 'react';
import styles from "../styles/Button.module.css";
import Link from 'next/link';
import Space from './Space';

function Button(
  {
    url="",
    children, 
    buttonFunction, 
    type="button", 
    buttonClass,
    dropButton=false,
  }){

  return (
    <>
    {
      (dropButton)
        ? <Space spaceHeight="3.2rem"/>
        : null
    }
    
    <Link href={url} passHref>
      <button
        onClick={ buttonFunction }
        type={type}  
        className={styles[buttonClass]}>
          {children}
      </button>    
    </Link>
    </>
  );
};

export default Button;
