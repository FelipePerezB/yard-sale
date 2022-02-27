import "@styles/NotFound.css"
import React from 'react'
import Button from "../components/Button"
import sad from "@icons/sad.svg"

function NotFound() {
  return (
    <main className='not-found'>
      <h2>Error</h2>
      <div className="number">
        <span>4</span>
        <img src={sad}/>
        <span>4</span>
      </div>
      <div>
        <h3>Page not found</h3>
        <p>The page you are looking is not available</p>
      </div>
      <Button type="not-found-button">
        Back to Home
      </Button>
    </main>    
  )
}

export default NotFound
