import React, { useState } from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';
import { NavLink } from 'react-router-dom';

// Assets

const About = (props) => {

  const [showTerminal, setShowTerminal] = useState(false)
  const onClick = () => setShowTerminal(true)

  const Terminal = () => {
    return(
      <>
        <h5>Kuang MK IV I.C.E. Breaker loaded.</h5>
        <h5>target.FREESIDE-SERVER.js /:~ NATHAN-MAUSERT-PORTFOLIO Node.js</h5>
        <h5>FILE: '../../Information/ABOUTME.txt'</h5>
        <h3>Ready Case?</h3>
        
          <NavLink className='daemonLink' to='/runAbout'>[Let's ride console cowboy]</NavLink>

      </>
    )
  }

  return (
    <>
    <DaemonChoice/>
    <div>
      <h1>BOCKRIS SYSTEMS GmbH</h1>
      <h5>Link established to Hosaka ONO-SENDAI Cyberspace 7</h5>
      <h5>Load Kuang MK IV I.C.E. Breaker?</h5>
      <button className='hack' type='submit' onClick={onClick}>YES</button>
      {showTerminal ? <Terminal/> : null}
    </div>
    </>
  )
  
}

export default About