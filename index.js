import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Spin />
    </div>
  );
}

class Spin extends React.Component {
  state = {
    min: 1,
    max: 3,
    current: null,
    list: [],
    isWin: null
  };

  startGame = () => {
    let i = 0;
    let temp = [];

    while (i < 3) {
      let result = this.generateNumber();
      temp.push(result);
      i++;
    }

    this.setState({
      list: temp,
      isWin: temp.every(currentValue => currentValue === temp[0])
    });
  };

  generateNumber = () => {
    return Math.floor(
      Math.random() * (this.state.max - this.state.min + 1) + this.state.min
    );
  };

  renderResult = () => {
    return (
      <div>
        {this.state.isWin && <h1>Win!</h1>}
        {!this.state.isWin && this.state.isWin != null && <h1>Lose</h1>}
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <div>{this.state.list}</div>
        <div>
          <button onClick={this.startGame}>Spin</button>
        </div>
        {this.renderResult()}
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
