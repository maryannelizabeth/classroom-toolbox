import React, { Fragment } from 'react'
//import UserTimerInput from './UserTimerInput'

const TimerDisplay = (props) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <h1>{props.time}</h1>
            {/* <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section> */}
          </div>
        </section>
      </section>
    </Fragment>
  )
}

TimerDisplay.defaultProps = {
  timerHours: '00',
  timerMinutes: '00',
  timerSeconds: '00',
}

export default TimerDisplay
