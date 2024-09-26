import Dice from "../components/Dice";
import { randomNum } from "../helper";
import React, { useState } from "react";

const App = () => {
  const [roll1, setRoll1] = useState(randomNum());
  const [roll2, setRoll2] = useState(randomNum());

  const rollAgain = () => {
    setRoll1(randomNum());
    setRoll2(randomNum());
  }

  return (
    <div className="container">
      <h1>Let's Roll!</h1>
      <Dice roll={roll1}/>
      <Dice roll={roll2}/>
      <h1>You rolled {(roll1 + 1) + (roll2 + 1)}!</h1>
      <button type="button" onClick={rollAgain}>
        Roll Again</button>
    </div>
  )
}

export default App
