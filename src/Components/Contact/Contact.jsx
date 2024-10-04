import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg'
import { toast } from 'react-toastify';
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "868372e0-622b-489d-85e9-24f336340469");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success('Sent Successfully',{
            theme:'colored'
          });
        }
      };

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
            <form onSubmit={onSubmit} className='contact-right'>
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
