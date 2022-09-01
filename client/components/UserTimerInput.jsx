import React, { useState } from 'react'

import TimerDisplay from './TimerDisplay'
//import { useForm } from 'react-hook-form'

function UserTimerInput() {
  // const [hours, setHours] = useState(0)
  // const [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState('00')

  const [print, setPrint] = useState(false)
  // const handleSubmit = useForm()
  // const onSubmit = (data, e) => console.log(data, e)
  // const onError = (errors, e) => console.log(errors, e)
  // function getHourInput(hourInput) {
  //   setHours(hourInput.target.value)
  //   console.log(hourInput)
  //   setPrint(false)
  // }
  // function getMinuteInput(minuteInput) {
  //   setMinutes(minuteInput.target.value)
  //   console.log(minuteInput)
  //   setPrint(false)
  // }
  function getSecondInput(input) {
    setSeconds(input.target.value)
    setPrint(false)
  }

  function updateCountdown() {
    let seconds = seconds < 10 ? '0' + seconds : seconds
    seconds--
    console.log(seconds)
  }

  let startClick = () => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
    console.log('clicked start click')
  }
  function clickHandler(evt) {
    evt.preventDefault()
    console.log('click')
    setPrint(true)
  }

  return (
    <div>
      <h1>Form</h1>
      <form
        className="form"
        action=""
        //method="post"
        //onSubmit={handleSubmit(onSubmit, onError)}
      >
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
        </label>
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
        </label> */}
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
        //timerMinutes={print ? minutes : 0}
        timerSeconds={print ? seconds : 0}
      />
      <button type="button" onClick={startClick}>
        Start countdown
      </button>
    </div>
  )
}

export default UserTimerInput
