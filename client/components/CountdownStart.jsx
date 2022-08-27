import React, { useState } from 'react'
import UserTimerInput from './UserTimerInput'
import TimerDisplay from './TimerDisplay'

function Timer() {
  let { startingTime, setStartingTime } = useState(<UserTimerInput />)
  console.log(startingTime)

  let time = setStartingTime * 60
  // const countdownEl = document.getElementById('countdown')
  console.log(time)
  function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    setStartingTime = `${minutes}: ${seconds}`
    time--
  }

  setInterval(updateCountdown, 1000)
  let clickHandler = () => {
    updateCountdown()
    console.log('clicked')
  }

  return (
    <div>
      Timer
      <Timer />
    </div>
  )
}

export default Timer
