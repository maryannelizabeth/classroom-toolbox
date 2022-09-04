import React, { useState } from 'react'
import TimerDisplay from './TimerDisplay'
import StartTimer from './StartTimer'

function UserTimerInput() {
  // const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  const [print, setPrint] = useState(false)

  // function getHourInput(hourInput) {
  //   setHours(hourInput.target.value)
  //   console.log(hourInput)
  //   setPrint(false)
  // }
  function getMinuteInput(minuteInput) {
    setMinutes(minuteInput.target.value)
    console.log(minuteInput)
    setPrint(false)
  }
  function getSecondInput(input) {
    setSeconds(input.target.value)
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
        {/* <label>
          Hours:
          <input
            type="number"
            name="hours"
            min="1"
            max="12"
            required
            onChange={getHourInput}
          />
        </label> */}
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
        //timerHours={print ? hours : 0}
        timerMinutes={print ? minutes : 0}
        timerSeconds={print ? seconds : 0}
      />
      <StartTimer />
    </div>
  )
}

export default UserTimerInput
