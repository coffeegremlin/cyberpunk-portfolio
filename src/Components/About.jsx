import React, { useState } from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';
import TextPortrait from './TextPortrait'
import { NavLink } from 'react-router-dom';

// Assets

const About = (props) => {

  const [showTerminal, setShowTerminal] = useState(false)
  const onClick = () => setShowTerminal(true)

  const Terminal = () => {
    return(
      <>
        <h5>Kuang MK IV I.C.E. Breaker loaded.</h5>
        <h5>target.FREESIDE-SERVER.js /:~ NATE-M-PORTFOLIO Node.js</h5>
        <h5>FILE: '../../Information/ABOUTME.txt'</h5>
        <h3>Ready Case?</h3>
        <NavLink className='daemonLink' to='/runAbout'>[Let's ride console cowboy]</NavLink>
        <br />
        <br />
        <h5>FILE: '../../Information/NATHAN-RENDER.PNG</h5>
        <TextPortrait/>
      </>
    )
  }

  const Terminal1 = () => {
    return (
      <>
        <div>
          <h1>BOCKRIS SYSTEMS GmbH</h1>
          <h5>Link established to Hosaka ONO-SENDAI Cyberspace 7</h5>
          <div>
            <h3>-- WARNING --</h3>
            <h1>ABOUTME.txt Access Denied</h1>
            <h3>-- WARNING --</h3>
          </div>
          <h5>Load Kuang MK IV I.C.E. Breaker?</h5>
          <button className='daemonLink' type='submit' onClick={onClick}>[YES]</button>
        </div>
      </>
    )
  }

  return (
    <>
    <DaemonChoice/>
      {showTerminal ? <Terminal/> : <Terminal1/>}
    <br />
    </>
  )
  
}

export default About