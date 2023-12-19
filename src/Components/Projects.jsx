import React, { useEffect, useRef, useState } from 'react';
import DaemonChoice from './Nav';
import '../Styles/About.css'
// add styles
import animateProjects from './animate/animateProjects.js';

// Assets

const Projects = () => {

  const ScrollRef = useRef(null);

  const [currentCount, setCount] = useState(26);
  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    animateProjects();
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
        <h3>Technical Project Index</h3>
        <div className='daemonLink'>
          <a href="https://lfgpls.herokuapp.com/" target="_blank" rel="noopener noreferrer">LFG</a> / <a href="https://github.com/coffeegremlin/lfg" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a href="https://coding-cooler.fly.dev/" target="_blank" rel="noopener noreferrer">CODINGCOOLER</a> / <a href="https://github.com/coffeegremlin/codingcooler" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a href="https://monster-hunter-lists.herokuapp.com/" target="_blank" rel="noopener noreferrer">Monster-Hunter</a> / <a href="https://github.com/coffeegremlin/Monster-Hunter-Lists" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a href="https://dimwoodadventure.netlify.app/" target="_blank" rel="noopener noreferrer">Dim-Wood</a> / <a href="https://github.com/coffeegremlin/Dim-Wood-Adventure" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <br/>
        <div className="scanline"></div>
        <pre><span className="blink" ref={ScrollRef}>█</span></pre>
      <br/>
    </>
  )
  // add const of images with clickable links to projects
}

export default Projects