import React from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';

// Assets
import { NavLink } from 'react-router-dom';

const About = (props) => {

  const [showTerminal, setShowTerminal] = React.useState(false)
  const [showDaemons, setShowDaemons] = React.useState(false)
  const onClick = () => setShowTerminal(true)
  const onLoadDaemons = () => setShowDaemons(true)

  const Terminal = (props) => {
    return(
      <div>
        <h5>Kuang MK IV I.C.E. Breaker loaded.</h5>
        <h5>target.FREESIDE-SERVER.js /:~ NATHAN-MAUSERT-PORTFOLIO Node.js</h5>
        <h5>FILE: '../../Information/ABOUTME.txt'</h5>
        <h3>Ready Case?</h3>
        <button className='hack'><NavLink to='/runAbout'>Let's ride console cowboy</NavLink></button>
    </div>
    )
  }

  return (
    <>
    <DaemonChoice/>
    <div className=''>
      <h1>BOCKRIS SYSTEMS GmbH</h1>
      <h5>Link established to Hosaka ONO-SENDAI Cyberspace 7</h5>
      <h5>Load Kuang MK IV I.C.E. Breaker?</h5>
      <button className='hack' type='submit' onClick={onClick}>YES</button>
      {/* Add a box around terminal to limit its size or make it scroll on overflow. vvvvv */}
    {showTerminal ? <Terminal/> : null}
    </div>
    </>
  )
  
}

export default About