import React from 'react'
import './Service.css';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow from '../../assets/arrow_icon.svg';
const Service = () => {
  return (
    <div className='services' id='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme} alt='theme'/>
      </div>
      <div className='services-container'>
        {Services_Data.map((service, index)=>{
            return <div className='services-format' key={index}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <p>Read more</p>
                    <img src={arrow} alt=''/>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Service;
