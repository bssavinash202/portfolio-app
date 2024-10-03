import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={logo} alt='logo'/>
      <ul className='nav-menu'>
        <li><p onClick={()=>{setMenu('home')}}><AnchorLink className='anchor' href='#home'>Home</AnchorLink></p>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('about')}}><AnchorLink className='anchor' offset={50} href='#about'>About me</AnchorLink></p>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('services')}}><AnchorLink className='anchor' offset={50} href='#services'>Services</AnchorLink></p>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('portfolio')}}><AnchorLink className='anchor' offset={50} href='#portfolio'>Portfolio</AnchorLink></p>{menu==='portfolio'?<img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>{setMenu('contact')}}><AnchorLink className='anchor' offset={50} href='#contact'>Contact</AnchorLink></p>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'>
      <AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
