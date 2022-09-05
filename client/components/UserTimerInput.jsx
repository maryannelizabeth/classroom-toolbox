import React, { useState } from 'react'
import TimerDisplay from './TimerDisplay'
import StartTimer from './StartTimer'

function UserTimerInput() {
  const [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const [print, setPrint] = useState(false)

  function getMinuteInput(minuteInput) {
    setMinutes(Number(minuteInput.target.value))

    setPrint(false)
  }
  function getSecondInput(input) {
    setSeconds(Number(input.target.value))
    setPrint(false)
  }

  function clickHandler(evt) {
    evt.preventDefault()
    console.log('click')
    setPrint(true)
  }

  return (
    <div>
      <h1>Form</h1>
      <form className="form" action="">
        <label>
          Minutes:
          <input
            type="number"
            name="minutes"
            min="1"
            max="59"
            required
            onChange={getMinuteInput}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            name="seconds"
            min="1"
            max="59"
            required
            onChange={getSecondInput}
          />
        </label>

        <button type="submit" value="submit" onClick={clickHandler}>
          Set Time!
        </button>
      </form>
      <TimerDisplay
        timerMinutes={print ? minutes : 0}
        timerSeconds={print ? seconds : 0}
      />
      <StartTimer
        seconds={seconds}
        minutes={minutes}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  )
}

export default UserTimerInput
