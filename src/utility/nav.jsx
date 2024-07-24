import React from 'react'
import { NavLink ,Link} from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
           <Link to='https://chaicode.com/'> <img src="image 1.png" alt="logo" width={42} height={42} /> </Link>
        </div>
        <section className='list'>
            <ul>
                <li>
                    <Link  to="/otp-form">Otp </Link>
                </li>
                <li>
                    <Link  to="/course-list">Cards</Link>
                </li>
                <li>
                    <Link to="/batches"> Batches</Link>
                </li>
            </ul>
        </section>
      </nav>
    </>
  )
}

export default Nav
