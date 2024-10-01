import React from 'react'
import './Hero.css';
import profile from '../../assets/avi.png'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt=''/>
      <h1><span>I'm Shivasai Avinash,</span> Frontend Developer based in India.</h1>
      <p>Aspiring Technology Professional | Junior Software Engineer at MRV IT SOLUTIONS Pvt Ltd. | Frontend Developer | Post Graduate (Master of Technology) in Power Electronics and Electrical Drives</p>   
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
