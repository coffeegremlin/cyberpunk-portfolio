import React, { useEffect, useRef, useState } from 'react';
import '../Styles/About.css'
import DaemonChoice from './Nav';

// Assets
import animateAbout from './animate/animateAbout.js';

const RunAbout = (props) => {

  const ScrollRef = useRef(null);

  const [currentCount, setCount] = useState(35);
  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    animateAbout();
  }, [])

  useEffect(() => {
    if (currentCount <= 0) {
      ScrollRef.current.scrollIntoView({ behavior: 'smooth' })
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount])

  return (
    <>
      <DaemonChoice/>
      <div className="scanline"></div>
      <pre><span className="blink" ref={ScrollRef}>█</span></pre>
      <div></div>
    </>
  )
}

export default RunAbout