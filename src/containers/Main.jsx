import React from 'react'
// import "../styles/Main.module.css"
import styles from "../styles/Main.module.css"
function Main({children,type="main"}) {
  return (
    <main className={styles[type]}>
      {children}
    
    </main>
    
  )
}

export default Main
