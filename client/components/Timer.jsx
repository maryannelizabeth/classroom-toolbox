import React, { useState } from 'react'

function Timer() {
  let { startingMinutes, setStartingMinutes } = useState(
    <p id="countdown">00:00</p>
  )

  let time = setStartingMinutes * 60
  // const countdownEl = document.getElementById('countdown')
  console.log(time)
  function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    setStartingMinutes = `${minutes}: ${seconds}`
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
      <p>{startingMinutes}</p>
      <button onClick={clickHandler}>Start</button>
    </div>
  )
}

export default Timer
