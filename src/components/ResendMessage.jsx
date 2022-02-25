import React from 'react'
import "@styles/ResendMessage.css"

function ResendMessage({spanText, aText}) {
  return (
    <div className='resend-message'>
      <span>
        { spanText }
      </span>
      <a href='/'>
        { aText }
      </a>
    </div>
    
  )
}

export default ResendMessage
