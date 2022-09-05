import React from 'react'

function StartTimer({ seconds, setSeconds, minutes, setMinutes }) {
  function updateCountdown() {
    // if (minutes == 0 && seconds == 0) {
    //   setMinutes('00') && setSeconds('00')
    // } else
    if (seconds == 0) {
      console.log('sero')
      seconds = 59
    } else if (seconds != 0) {
      console.log('not zero')
      setSeconds(seconds--)
    }

    console.log(seconds)
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
