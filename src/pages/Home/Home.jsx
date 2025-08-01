import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assests/hero_banner.jpg'
import hero_title from '../../assests/hero_title.png'
import play_icon from '../../assests/play_icon.png'
import info_icon from '../../assests/info_icon.png'
import TitleCards from '../../components/TittleCards/TittleCards'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img'/>
          <p>discovering his ties Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolorum animi unde sit, explicabo distinctio asperiores ipsa, consectetur labore obcaecati optio et vel accusantium porro impedit non, repudiandae repellendus deleniti?</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/> 
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Picks For You"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
