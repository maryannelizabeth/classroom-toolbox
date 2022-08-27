import React from 'react'

import TimerDisplay from './TimerDisplay'
//import { useForm } from 'react-hook-form'

function UserTimerInput() {
  // const handleSubmit = useForm()
  // const onSubmit = (data, e) => console.log(data, e)
  // const onError = (errors, e) => console.log(errors, e)

  return (
    <>
      <h1>Form</h1>
      <form
        className="form"
        action=""
        method="post"
        //onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label>
          Time:
          <input type="number" name="time" min="1" max="10000" required />
        </label>

        <button type="submit" value="submit">
          Start Countdown!
        </button>
      </form>
      <TimerDisplay />
    </>
  )
}

export default UserTimerInput
