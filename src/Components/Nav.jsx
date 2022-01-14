import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'

// Assets
// import Crosshairs from '../Assets/210415_Skill_06.png'
// import Lightning from '../Assets/210415_Skill_07.png'
// import Moon from '../Assets/210415_Skill_04.png'
// import Disk from '../Assets/210414_Skill_01.png'
// import UI from '../Assets/Ui_03.png'

const DaemonChoice = () => {

  return (
    <>
      <button className='daemonButton'>Load Navigation Daemons</button>
      {/* Add in conditional rendering you fuck */}
      <div className='Daemons'>
        <ul className='daemonStorage'>
          <NavLink className='daemonLink' id='landing' to='/'>Landing.exe</NavLink>
          <NavLink className='daemonLink' id='about' to='/about'>About.py</NavLink>
          <NavLink className='daemonLink' id='projects' to='/projects'>Projects.json</NavLink>
          <NavLink className='daemonLink' id='resume' to='/resume'>Resume.PDF</NavLink>
          {/* <NavLink className='daemonLink' id='skills' to='/skills'>Skills.json</NavLink> */}
          <NavLink className='daemonLink' id='contact' to='/contact'>Contact.md</NavLink>
          </ul>
      </div>
      <br />
    </>
  )
}

export default DaemonChoice