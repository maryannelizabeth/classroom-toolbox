import React, { Fragment } from 'react'
//import UserTimerInput from './UserTimerInput'

const TimerDisplay = (props) => {
  const countdownEl = document.getElementById('countdown')
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            {/* <section>
              <p>{props.timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span> */}
            <section>
              <p className="countdown">{props.timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p className="countdown">{props.timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  )
}

TimerDisplay.defaultProps = {
  // timerHours: '00',
  timerMinutes: '00',
  timerSeconds: '00',
}

export default TimerDisplay
