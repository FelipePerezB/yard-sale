import React from 'react'
import "@styles/Main.css"

function Main({children,type="main"}) {
  return (
    <main className={type}>
      {children}
    
    </main>
    
  )
}

export default Main
