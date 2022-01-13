import React, { useState } from 'react';
import DaemonChoice from './Nav';
import '../Styles/About.css'


// Assets

const Contact = () => {

  return (
    <>
    <DaemonChoice/>
    <h3>Contact Me:</h3>
    <div>
      <a href="mailto:natemausert@gmail.com">natemausert@gmail.com</a>
      <br/>
      <a href="tel:5187087160" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">518-708-7160</a>
      <br/>
      <a href="https://www.linkedin.com/in/nathanmausert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <br/>
      <a href="https://twitter.com/NMausert" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
    </>
  )
}

export default Contact