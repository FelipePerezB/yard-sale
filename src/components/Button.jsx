import React from 'react'
import styles from "../styles/Button.module.css"
import Link from 'next/link'
import { useRouter } from 'next/router'

// const getUrl = () => (window)

function Button(
  {
    url=useRouter().pathname,
    children, 
    buttonFunction, 
    type="button", 
    buttonClass,
  }){
    // const actualUrl= getUrl()
    // url=actualUrl
    // console.log(window)
    // console.log(window.location)
    (url!==undefined)
      ? url
      : useRouter().pathname


  return (
    <Link href={url}>
      <button
        onClick={ buttonFunction }
        type={type}  
        className={styles[buttonClass]}>
          {children}
      </button>    
    </Link>
  )
}

export default Button
