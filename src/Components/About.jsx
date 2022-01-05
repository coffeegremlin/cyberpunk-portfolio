import React from 'react';
import '../Styles/About.css'
import aboutFunction from '../Assets/aboutFunction.js'

// Assets

const About = () => {

  const anim = aboutFunction

  return (
    <>
      <div class="scanline"></div>
      <pre class="code"><span class="blink">█</span></pre>
      <anim/>
    </>
  )
}

export default About