import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'

// Assets
import { motion } from 'framer-motion';
import Crosshairs from '../Assets/210415_Skill_06.png'
import Lightning from '../Assets/210415_Skill_07.png'
import Moon from '../Assets/210415_Skill_04.png'
import Disk from '../Assets/210414_Skill_01.png'
import UI from '../Assets/Ui_03.png'

const DaemonChoice = () => {

  return (
    <>
      <button className='daemonButton'>Load Navigation Daemons</button>
      {/* Add in conditional rendering you fuck */}
      <div className='Daemons'>
        <ul className='daemonStorage'>
          <NavLink className='daemonLink' id='landing' to='/'>Landing.exe</NavLink>
          <NavLink className='daemonLink' to='/about'>AboutKuangMkIv.py</NavLink>
          <NavLink className='daemonLink' to='/projects'>Projects.json</NavLink>
          <NavLink className='daemonLink' to='/resume'>Resume.PDF</NavLink>
          <NavLink className='daemonLink' to='/skills'>Skills.json</NavLink>
          <NavLink className='daemonLink' to='/contact'>Contact.md</NavLink>
          </ul>
      </div>
      <br />
    </>
  )
}

export default DaemonChoice