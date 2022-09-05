import React from 'react'

function StartTimer({ seconds, setSeconds, minutes, setMinutes }) {
  function updateCountdown() {
    setSeconds(seconds--)
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
