import React from 'react'
import "../styles/InformationText.css"

function Information({children}) {
  return (
  <section className="information">
    {children}
  </section>
  )
}

export default Information
