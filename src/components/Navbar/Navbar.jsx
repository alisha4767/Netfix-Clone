import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
function navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv sHOWS</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className='navbar-right'></div>
    </div>
  )
}

export default navbar
