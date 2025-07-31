import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png'
import search_icon from '../../assests/search_icon.svg'
import bell_icon from '../../assests/bell_icon.svg'
import profile_img from '../../assests/profile_img.png'
import caret_icon from '../../assests/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>sign out of Netflix</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
