import styles from "../styles/NotFound.module.css"
import React from 'react'
import Button from "@components/Button"
import sad from "@icons/sad.svg"
import useReedirect from "../hooks/useReedirect"
import Image from "next/image"


function NotFound() {
  return (
    <main className={styles['not-found']}>
      <h2>Error</h2>
      <div className={styles["number"]}>
        <span>4</span>
        <Image alt="sad face" src={sad}/>
        <span>4</span>
      </div>
      <div>
        <h3>Page not found</h3>
        <p>The page you are looking is not available</p>
      </div>
      <Button buttonFunction={()=>{useReedirect(" /")}} buttonClass="not-found-button">
        Back to Home
      </Button>
    </main>    
  )
}

export default NotFound
