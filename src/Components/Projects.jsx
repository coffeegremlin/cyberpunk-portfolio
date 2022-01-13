import React, {useEffect} from 'react';
import DaemonChoice from './Nav';
import '../Styles/Projects.css'
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
        <h1>My Projects</h1>
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