import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'

// Assets
import Crosshairs from '../Assets/210415_Skill_06.png'
import Lightning from '../Assets/210415_Skill_07.png'
import Moon from '../Assets/210415_Skill_04.png'
import Disk from '../Assets/210414_Skill_01.png'
import UI from '../Assets/Ui_03.png'

const DaemonChoice = () => {
  return (
    <div className='Daemons'>
      <ul
      className='daemonStorage'
      // onDrop={dragDrop}
      // onDragOver={loadDeck}
      >
        
          {/* Add in navlink in buttons somehow vvvvv */}
        <button className='daemonButton' to='/skills'><NavLink to='/skills'>Skills.py</NavLink></button>
        
        <button className='daemonButton'>
          Projects.jsx
        </button>
        <button className='daemonButton'>
          Resume.pdf
        </button>
        <button className='daemonButton'>
          Conctact.html
        </button>
      </ul>
    <br />
  </div>
  )
}

export default DaemonChoice