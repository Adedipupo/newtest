import React, { useState } from 'react'
// import { Menu } from './Menu'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        TqShop
        <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i
          className={click ? 'fa fa-times' : 'fa fa-align-right'}
          aria-hidden="true"
        ></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
