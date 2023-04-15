import React from 'react'
import '../../css/Contact.css'
import { FaMapMarkerAlt} from "react-icons/fa"
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <h2 className='contact_head'>Contact Us</h2>
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <div className='contact_icon'><FaMapMarkerAlt/></div>        
           <div class="topic">Address</div>
          <div class="text-one">Ghaziabad</div>
          <div class="text-two">Delhi-Meerut Expressway</div>
        </div>
        <div class="phone details">
          <div className='contact_icon'><BsFillTelephoneInboundFill/></div>
          <div class="topic">Phone</div>
          <div class="text-one">+91 1234567891</div>
          <div class="text-two">+91 0022113300</div>
        </div>
        <div class="email details">
          <div className='contact_icon'><SiMinutemailer/></div>
              <div class="topic">Email</div>
          <div class="text-one">Shophub@gmail.com</div>
          <div class="text-two">info@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        
      <form action="https://formspree.io/f/mqkjwora" method='post'>
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name='Username' />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name='Email' />
        </div>
        <div class="input-box message-box">
          <textarea type="text" placeholder="Enter Your Message" name='Message' />
          </div>
        <div class="button">
       <button type='submit' className='send_button'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  </div>
 
    </>
  )
}

export default Contact