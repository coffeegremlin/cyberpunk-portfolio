import React, { useEffect } from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';

// Assets
import animateAbout from './animate/animateAbout.js';

const RunAbout = (props) => {

  const TextLoad = () => {
    useEffect(() => {
      animateAbout();
    }, []);

    return (
      <>
        <DaemonChoice/>
        <div className="scanline"></div>
        <pre><span className="blink">█</span></pre>
      </>
    )
  }

  return (
    <>
    <TextLoad/>
    </>
  )
}

export default RunAbout