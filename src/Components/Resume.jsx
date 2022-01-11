import React from 'react';
import DaemonChoice from './Nav';
import '../Styles/Resume.css'

// Assets
import PDF from '../Assets/Resume-NM.pdf'

const Resume = () => {
  return (
    <>
      <DaemonChoice/>
      <div className='card'>
          <a href={PDF}>Download Resume.PDF</a>
        <div>
          {/* Add resume in text format here */}
        </div>
      </div>
    </>
  )
}

export default Resume