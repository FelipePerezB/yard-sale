import React from 'react'
import styles from "../styles/EmailImage.module.css"
import email from "@icons/email.svg"
import Image from 'next/image'

function EmailImage() {
  return (
    <div className={styles['email-image']}>
      <Image src={email} alt={"email image"}/>      
    </div>    
  )
}

export default EmailImage
