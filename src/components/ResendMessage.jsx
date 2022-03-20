import React from 'react'
import styles from "../styles/ResendMessage.module.css"

function ResendMessage({spanText, aText}) {
  return (
    <div className={styles['resend-message']}>
      <span>
        { spanText }
      </span>
      <a>
        { aText }
      </a>
    </div>
    
  )
}

export default ResendMessage
