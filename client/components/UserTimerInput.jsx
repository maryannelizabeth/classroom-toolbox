import React, { useState } from 'react'

import TimerDisplay from './TimerDisplay'
//import { useForm } from 'react-hook-form'

function UserTimerInput() {
  const [time, setTime] = useState(0)
  const [print, setPrint] = useState(false)

  function getInput(input) {
    setTime(input.target.value)
    setPrint(false)
    return input
  }
  let startTime = setTime * 60

  function updateCountdown() {
    const minutes = Math.floor(startTime / 60)
    let seconds = startTime % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    startTime = `${minutes}: ${seconds}`
    startTime--
  }

  setInterval(updateCountdown, 1000)
  let clickHandler = () => {
    setPrint(true)
    updateCountdown()
    console.log('clicked')
  }
  // const TimerDisplay = (props) => {
  //   return (
  //     <Fragment>
  //       <section className="timer-container">
  //         <section className="timer">
  //           <div className="clock">
  //             <section>
  //               <h1>{props.time}</h1>

  //             </section>
  //           </div>
  //         </section>
  //       </section>
  //     </Fragment>
  //   )
  // }

  // TimerDisplay.defaultProps = {
  //   timerHours: '00',
  //   timerMinutes: '00',
  //   timerSeconds: '00',
  // }}

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

        <button type="submit" value="submit" onClick={clickHandler}>
          Start Countdown!
        </button>
      </form>
      <TimerDisplay time={print ? time : 0} />
    </div>
  )
}

export default UserTimerInput
