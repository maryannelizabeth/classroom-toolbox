import React, { Fragment } from 'react'

function Timer() {
  let { startingTime, setStartingTime } = useState(<UserTimerInput />)
  console.log(startingTime)

  let time = setStartingTime * 60
  function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    setStartingTime = `${minutes}: ${seconds}`
    time--
  }

  setInterval(updateCountdown, 1000)
  let clickHandler = () => {
    updateCountdown()
    console.log('clicked')
  }
  const TimerDisplay = (props) => {
    return (
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <h1>{props.time}</h1>
              </section>
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
}

export default Timer
