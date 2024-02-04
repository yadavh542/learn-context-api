import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='nav'>
        <a href="/" className='site-title'>Site Title</a>
        <ul className='links'>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar