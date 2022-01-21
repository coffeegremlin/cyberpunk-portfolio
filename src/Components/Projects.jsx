import React, { useEffect, useRef } from 'react';
import DaemonChoice from './Nav';
import '../Styles/About.css'
// add styles
import animateProjects from './animate/animateProjects.js';

// Assets

const Projects = () => {

  const divRef = useRef(null);
  const Seconds = 100;

  useEffect(() => {
    animateProjects();
    const interval = setInterval(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }, Seconds);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <DaemonChoice/>
        <h3>Technical Project Index</h3>
        <div className="scanline"></div>
      <pre><span className="blink" ref={divRef}>█</span></pre>
      <div>
        <a href="https://lfgpls.herokuapp.com/" target="_blank" rel="noopener noreferrer">LFG</a>/<a href="https://github.com/coffeegremlin/lfg" target="_blank" rel="noopener noreferrer">GitHub</a> - <a href="https://codingcooler.herokuapp.com/" target="_blank" rel="noopener noreferrer">CODINGCOOLER</a>/<a href="https://github.com/coffeegremlin/codingcooler" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br/>
        <a href="https://monster-hunter-lists.herokuapp.com/" target="_blank" rel="noopener noreferrer">Monster-Hunter</a>/<a href="https://github.com/coffeegremlin/Monster-Hunter-Lists" target="_blank" rel="noopener noreferrer">GitHub</a> - <a href="https://dimwoodadventure.netlify.app/" target="_blank" rel="noopener noreferrer">Dim-Wood</a>/<a href="https://github.com/coffeegremlin/Dim-Wood-Adventure" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <br/>
    </>
  )
  // add const of images with clickable links to projects
}

export default Projects