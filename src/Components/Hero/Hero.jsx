import React from 'react'
import './Hero.css';
import profile from '../../assets/avi.png'
import { Typewriter } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {

  return (
    <div className='hero' id='home'>
      <img src={profile} alt='profile'/>
      <h1><span>I'm Shivasai Avinash,</span> 
      <Typewriter
      words={['Frontend Developer', 'Post Graduate', 'Electrical Engineer']}
      loop={true}
      cursor
      cursorStyle='|'
      typeSpeed={130}
      deleteSpeed={130}
      cursorBlinking
      >  
      </Typewriter>
      </h1>
      <p>Aspiring Technology Professional | Junior Software Engineer at MRV IT SOLUTIONS Pvt Ltd. | Frontend Developer | Post Graduate (Master of Technology) in Power Electronics and Electrical Drives</p>   
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'><a href='resume.pdf' download='Avinash_resume'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero;
