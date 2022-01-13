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
            {/* make this better formatted */}
            <ul>
              <li>
                <a href="https://lfgpls.herokuapp.com/">LFG</a>
              </li>
              <li>
                <a href="https://codingcooler.herokuapp.com/">CODINGCOOLER</a>
              </li>
              <li>
                <a href="https://monster-hunter-lists.herokuapp.com/">Monster-Hunter</a>
              </li>
              <li>
                <a href="https://dimwoodadventure.netlify.app/">Dim-Wood</a>
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