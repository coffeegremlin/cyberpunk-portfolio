import React from 'react';
import DaemonChoice from './Nav';
import '../Styles/About.css'


// Assets

const Contact = () => {

  return (
    <>
      <DaemonChoice/>
      <h3>Contact Me:</h3>
      <img id="winterMute" src="https://media1.giphy.com/media/u5IJdDXKFfGWi01ydS/giphy.gif?cid=790b76112354d0bb423271737e333483edc765b4377ce017&rid=giphy.gif&ct=g" alt="Winter_Mute" />
      <div id='contactlinks'>
        <a
          href="mailto:natemausert@gmail.com"
        >
          Email: Business
        </a>

        {/* <a
          href="tel:nope"
          onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
        >
          nope
        </a> */}

        <a
          href="https://www.linkedin.com/in/nathanmausert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href='https://calendly.com/natemausert'
          target="_blank"
          rel="noopener noreferrer"
        >
          Calendly
        </a>

        <a
          href="https://twitter.com/NMausert"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </>
  )
}

export default Contact