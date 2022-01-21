import React, { useEffect, useRef } from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';

// Assets
import animateAbout from './animate/animateAbout.js';

const RunAbout = () => {

  const divRef = useRef(null);
  const Seconds = 100;

  useEffect(() => {
    animateAbout();
    const interval = setInterval(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }, Seconds);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <DaemonChoice/>
      <div className="scanline"></div>
      <pre><span className="blink" ref={divRef}>█</span></pre>
    </>
  )
}

export default RunAbout