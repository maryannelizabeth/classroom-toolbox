import React, { useState } from 'react'
import dice from '../../data/dice'
import { useParams } from 'react-router-dom'

function Dice() {
  let [diceSelected, setDiceSelected] = useState(0)
  let [link, setLink] = useState('/Dice')

  const diceId = useParams().id
  diceSelected = dice.find((el) => el.id == diceId)
  console.log(diceSelected)
  const firstDice = (
    <img
      className="diceOne"
      src={diceSelected.diceOneImg}
      alt={diceSelected.alt}
    />
  )
  const secondDice = (
    <img
      className="diceTwo"
      src={diceSelected.diceTwoImg}
      alt={diceSelected.alt}
    />
  )
  const thirdDice = (
    <img
      className="diceTwo"
      src={diceSelected.diceThreeImg}
      alt={diceSelected.alt}
    />
  )

  if (diceSelected == 1) {
    setDiceSelected(1)
  } else if (diceSelected == 2) {
    setDiceSelected(2)
  } else if (diceSelected == 3) {
    setDiceSelected(3)
  }

  const clickHandler = () => {
    setLink(`${link}/${diceSelected}`)
  }

  {
    if (diceSelected == 3) {
      return
    }
  }

  return (
    <>
      <div className="dicePage">
        <div className="diceHeading">
          <h3>How many dice would you like to roll?</h3>
          <div className="buttonDiv">
            <button id="1" className="diceButton" onClick={clickHandler}>
              One
            </button>
            <button id="2" className="diceButton" onClick={clickHandler}>
              Two
            </button>
            <button id="3" className="diceButton" onClick={clickHandler}>
              Three
            </button>
          </div>
        </div>
      </div>

      <div className="diceRolling"></div>
    </>
  )
}

export default Dice
