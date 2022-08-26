import React from 'react'

function Dice() {
  return (
    <div className="dicePage">
      <div className="diceHeading">
        <h3>How many dice would you like to roll?</h3>
        <div className="buttonDiv">
          <button className="diceButton">One</button>
          <button className="diceButton">Two</button>
          <button className="diceButton">Three</button>
        </div>
      </div>
    </div>
  )
}

export default Dice
