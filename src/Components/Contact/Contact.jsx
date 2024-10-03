import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new Projects, so feel free to message me about anything you want me to work on. You can contact me anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail} alt=''/><p>bssavinash202@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={call} alt=''/><p>+1 (508)-456-1902</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={location} alt=''/><p>West Haven, CT, United States of America, Zipcode: 06516</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor=''>Your Name</label><input type='text' placeholder='Enter your Name' name='name'></input>
                <label htmlFor=''>Your Email</label><input type='email' placeholder='Enter your Email' name='email'></input>
                <label htmlFor=''>Write Your Message</label><textarea type='text' placeholder='Enter your Message' name='message' rows={8}/>
                <button className='contact-submit' type='submit'>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}
export default Contact;
