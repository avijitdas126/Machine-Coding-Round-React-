import React from 'react'
import './utility.css'
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1 className='error'>
        <img src="404.jpg" alt="404 page" width={400} height={400} /><br />
        404 page 

      </h1>
      <p className='error'>Go to <Link to="/">Home Page</Link></p>
    </div>
  )
}

export default Error
