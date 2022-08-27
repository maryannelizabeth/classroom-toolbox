import React from 'react'

function RollThreeDice() {
  return (
    <>
      <div className="dicePage">
        <div className="diceHeading"></div>
        <div className="diceRolling">
          <img className="diceOne" src="./images/dice1.png" alt="dice" />
          <img className="diceOne" src="./images/dice2.png" alt="dice" />
          <img className="diceOne" src="./images/dice3.png" alt="dice" />
          <button>Roll Dice!</button>
        </div>{' '}
      </div>
    </>
  )
}

export default RollThreeDice
