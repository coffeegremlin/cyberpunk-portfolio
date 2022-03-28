import React, { useState, useEffect } from 'react';
// test vvv
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
// test ^^^
import DaemonChoice from './Nav';
import '../Styles/Observe.css'

import animateObserve from './animate/animateObserve';
// import { useEffect } from 'react/cjs/react.production.min';

const Observe = (props) => {
  useEffect(() => {
    animateObserve();
  }, [])

  return (
    <>
      <DaemonChoice/>
      <h3>--- Visual Connection to WinterMute AI ---</h3>
        <h5>BEGIN</h5>
        <canvas id="canvas" class="hide"></canvas>
        <video class="hide" playsinline="true"></video>
        <h5>END</h5>
    </>
  )
}

export default Observe