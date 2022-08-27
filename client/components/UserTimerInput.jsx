import React, { useState } from 'react'

import TimerDisplay from './TimerDisplay'
//import { useForm } from 'react-hook-form'

function UserTimerInput() {
  const [time, setTime] = useState(0)
  const [print, setPrint] = useState(false)
  // const handleSubmit = useForm()
  // const onSubmit = (data, e) => console.log(data, e)
  // const onError = (errors, e) => console.log(errors, e)
  function getInput(input) {
    setTime(input.target.value)
    setPrint(false)
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
        <label>
          Time:
          <input
            type="number"
            name="time"
            min="1"
            max="10000"
            required
            onChange={getInput}
          />
        </label>

        <button type="submit" value="submit" onClick={() => setPrint(true)}>
          Start Countdown!
        </button>
      </form>
      <TimerDisplay time={print ? time : 0} />
    </div>
  )
}

export default UserTimerInput
