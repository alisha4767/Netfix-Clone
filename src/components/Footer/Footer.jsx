import React from 'react'
import './Footer.css'
import  youtube_icon from '../../assests/youtube_icon.png'
import  twitter_icon from '../../assests/twitter_icon.png'
import  instagram_icon from '../../assests/instagram_icon.png'
import  facebook_icon from '../../assests/facebook_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" /> 
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift cards</li>
        <li>Media centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookies and Prefrences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@1997-2023,Netflix.Inc</p>
    </div>
  )
}

export default Footer
