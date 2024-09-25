import Dice from "../components/Dice";
import { randomNum } from "../helper";
import Title from "../components/Title";
import RollValue from "../components/RollValue";
import React from "react";

class Roller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll1: randomNum(),
      roll2: randomNum()
    };
  }

  rollAgain = () => {
    this.setState({roll1: randomNum()});
    this.setState({roll2: randomNum()});
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Dice roll={this.state.roll1}/>
        </div>
        <div className="col">
          <Dice roll={this.state.roll2}/>
        </div>
        <RollValue num1={this.state.roll1} num2={this.state.roll2}/>
        <div className="col sm-2">
          <button type="button" className="btn btn-dark" onClick={this.rollAgain}>
            Roll Again</button>
        </div>
      </div>
    )
  }
}

const App = () => {
  return (
    <div className="container">
      <Title/>
      <Roller />
    </div>
  )
}

export default App
