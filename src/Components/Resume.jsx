import React from 'react';
import DaemonChoice from './Nav';
import '../Styles/Resume.css'

// Assets
import PDF from '../Assets/Resume-NM.pdf'

const Resume = () => {
  return (
    <>
    <main>
      <DaemonChoice/>
      <div className='card'>
        <button className='hack' href={PDF} target='_blank'>
          Download Resume.PDF
        </button>
      </div>
    </main>
    </>
  )
}

export default Resume