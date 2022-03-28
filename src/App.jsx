import React from 'react';
import { Routes, Route } from 'react-router';
import './Styles/App.css';

// Components
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
// import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import RunAbout from './Components/RunAbout';
import Observe from './Components/Observation';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/runAbout' element={<RunAbout/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/observe' element={<Observe/>} />
      </Routes>
    </main>
  );
}

export default App;
