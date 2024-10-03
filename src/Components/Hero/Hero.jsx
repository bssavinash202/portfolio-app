import React from 'react'
import './Hero.css';
import profile from '../../assets/avi.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt='profile'/>
      <h1><span>I'm Shivasai Avinash,</span> Frontend Developer based in India.</h1>
      <p>Aspiring Technology Professional | Junior Software Engineer at MRV IT SOLUTIONS Pvt Ltd. | Frontend Developer | Post Graduate (Master of Technology) in Power Electronics and Electrical Drives</p>   
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero;
