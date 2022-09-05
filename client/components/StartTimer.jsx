import React from 'react'

function StartTimer({ seconds, setSeconds, minutes, setMinutes }) {
  function updateCountdown() {
    setSeconds(seconds--)
    console.log(seconds)
    // let seconds = seconds < 10 ? '0' + seconds : seconds
    // seconds--
    // console.log(seconds)
  }
  let startClick = () => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
    // need to on click update inner HTML to count down from the user input

    console.log('clicked start click')
  }
  return (
    <button type="button" onClick={startClick}>
      Start countdown
    </button>
  )
}

export default StartTimer
