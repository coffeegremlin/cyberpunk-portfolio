import React, {useEffect} from 'react';
import DaemonChoice from './Nav';
import '../Styles/About.css'
// add styles
import animateProjects from './animate/animateProjects.js';

// Assets

const Projects = (props) => {

  const TextLoad = () => {
    useEffect(() => {
      animateProjects();
    }, []);

  return (
    <>
      <DaemonChoice/>
        <h3>My Projects</h3>
        <div id='deploydemos'>
            <ul>
              <li>
                <a href="https://lfgpls.herokuapp.com/" target="_blank" rel="noopener noreferrer">LFG</a> / <a href="https://github.com/coffeegremlin/lfg" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://codingcooler.herokuapp.com/" target="_blank" rel="noopener noreferrer">CODINGCOOLER</a> / <a href="https://github.com/coffeegremlin/codingcooler" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://monster-hunter-lists.herokuapp.com/" target="_blank" rel="noopener noreferrer">Monster-Hunter</a> / <a href="https://github.com/coffeegremlin/Monster-Hunter-Lists" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://dimwoodadventure.netlify.app/" target="_blank" rel="noopener noreferrer">Dim-Wood</a> / <a href="https://github.com/coffeegremlin/Dim-Wood-Adventure" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
            
        </div>
        <br/>
        <div className="scanline"></div>
        <pre><span className="blink">█</span></pre>
    </>
  )
  }
  // add const of images with clickable links to projects
  return (
    <>
      <TextLoad/>
    </>
  )
}

export default Projects