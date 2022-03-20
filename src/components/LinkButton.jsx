import React from 'react'
import styles from "../styles/LinkButton.module.css"
import Link from 'next/link'

function LinkButton({children, href}) {
  return (
    <div className={styles['link-button-container']}>
      <Link href={ href }>{children}</Link>
    </div>
  )
}

export default LinkButton
