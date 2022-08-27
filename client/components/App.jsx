import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import DiceHome from './Dice'
import RollOneDice from './RollOneDice'
import RollTwoDice from './RollTwoDice'
import RollThreeDice from './RollThreeDice'
import SpinTheWheel from './SpinTheWheel'
import Clock from './Timer1'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinthewheel" element={<SpinTheWheel />} />
        <Route path="/timer" element={<Clock />} />
        <Route path="/dice" element={<DiceHome />} />
        <Route path="/rollonedice" element={<RollOneDice />} />
        <Route path="/rolltwodice" element={<RollTwoDice />} />
        <Route path="/rollthreedice" element={<RollThreeDice />} />
      </Routes>
    </>
  )
}

export default App
