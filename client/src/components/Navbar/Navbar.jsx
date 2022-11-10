import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to='/' >
            <button className='nav-btn'>Log out</button>
        </Link>
    </nav>
  )
}

export default Navbar