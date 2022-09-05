import React from 'react'

function StartTimer({ seconds, setSeconds, minutes, setMinutes }) {
  function updateCountdown() {
    if (seconds == 0) {
      seconds = 59
      setMinutes(minutes--)
    } else if (seconds != 0) {
      setSeconds(seconds--)
    }
    // minutes = seconds * 60
    // if (minutes != 0) {
    //   setMinutes(minutes--)
    // } else if (minutes == 0) {
    //   setMinutes(0)
    // }
  }
  let startClick = () => {
    updateCountdown()
    setInterval(updateCountdown, 1000)

    console.log('clicked start click')
  }
  return (
    <button type="button" onClick={startClick}>
      Start countdown
    </button>
  )
}

export default StartTimer
