import React from 'react'
import "@styles/EmailImage.css"
import email from "@icons/email.svg"

function EmailImage() {
  return (
    <div className='email-image'>
      <img src={email} alt={"email image"}/>      
    </div>    
  )
}

export default EmailImage
