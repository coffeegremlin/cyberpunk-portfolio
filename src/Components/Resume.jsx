import React from 'react';
import DaemonChoice from './Nav';
import '../Styles/Resume.css'

// Assets
import PDF from '../Assets/Mausert-Resume.pdf'

const Resume = () => {
  return (
    <>
      <DaemonChoice/>
      <div className='card'>
          <a href={PDF} target="_blank" rel="noopener noreferrer">Download_Nathan_Resume.PDF</a>
        <div>
          {/* Add resume in text format here? */}
        </div>
      </div>
    </>
  )
}

export default Resume