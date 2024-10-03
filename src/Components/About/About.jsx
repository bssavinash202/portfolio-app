import React from 'react'
import './About.css';
import theme from'../../assets/theme_pattern.svg';
import profile from '../../assets/avip.png';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme} alt='theme'/>
      </div>
      <div className='about-section'>
        <div className='about-left'>
        <img src={profile} alt='profile'/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>As a post-graduate student specializing in Power Electronics and Electrical Drives, and a former Bachelor's student in Electrical and Electronics Engineering, I am passionate about leveraging technology to solve real-world problems and drive innovation.</p>
                <p>Currently, I am working as a Junior Software Engineer (Front End Developer) at MRV IT Solutions Pvt Ltd, where I specialize in React.js. This role has further expanded my technical capabilities, allowing me to contribute to cutting-edge web development projects while continuing to evolve my problem-solving expertise.</p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                <div className='about-skill'><p>React</p><hr style={{width:'70%'}}/></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:'60%'}}/></div>
                <div className='about-skill'><p>JAVA</p><hr style={{width:'50%'}}/></div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div><hr />
        <div className='about-achievement'>
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div><hr />
        <div className='about-achievement'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
