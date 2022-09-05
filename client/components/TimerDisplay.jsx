import React, { Fragment } from 'react'

const TimerDisplay = (props) => {
  console.log(props)
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
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
  timerMinutes: '00',
  timerSeconds: '00',
}

export default TimerDisplay
