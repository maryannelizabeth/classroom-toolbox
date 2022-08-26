import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Dice from './Dice'
import SpinTheWheel from './SpinTheWheel'
import Timer from './Timer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinthewheel" element={<SpinTheWheel />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/dice" element={<Dice />} />
      </Routes>
    </>
  )
}

export default App
