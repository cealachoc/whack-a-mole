import React from "react";
import './Styles/Game.css'

const Game = () => {
  return (
    <div>
      <h1>Whack A Mole!</h1>
      <span className="score">0</span>
      <br />
      <button className="start" >Start Game</button>
    </div>
  )
}

export default Game;