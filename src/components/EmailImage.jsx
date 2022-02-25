import React from 'react'
import "@styles/EmailImage.css"
import email from "@icons/email.svg"

function EmailImage() {
  return (
    <div className='email-image'>
      <img src={email}/>      
    </div>    
  )
}

export default EmailImage
