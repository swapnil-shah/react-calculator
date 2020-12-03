import React, { Component } from "react";

class Calculator extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    answer: ""
  };

  handleAdd = () => {
    this.setState({ answer: this.state.firstNumber + this.state.secondNumber });
  };
  handleSubtract = () => {
    this.setState({
      answer: this.state.firstNumber - this.state.secondNumber
    });
  };
  handleMultiply = () => {
    this.setState({
      answer: this.state.firstNumber * this.state.secondNumber
    });
  };
  handleDivision = () => {
    this.setState({
      answer: this.state.firstNumber / this.state.secondNumber
    });
  };

  handleClick = (event) => {
    if (event.currentTarget.id === "add") {
    }
    event.currentTarget.id === "add"
      ? this.setState({
        answer: this.state.firstNumber + this.state.secondNumber
      })
      : event.currentTarget.id === "subtract"
        ? this.setState({
          answer: this.state.firstNumber - this.state.secondNumber
        })
        : event.currentTarget.id === "multiply"
          ? this.setState({
            answer: this.state.firstNumber * this.state.secondNumber
          })
          : this.setState({
            answer: this.state.firstNumber / this.state.secondNumber
          });
  };
  handleFirstNum = (event) => {
    this.setState({ firstNumber: parseInt(event.target.value, 0) });
  };
  handleSecondNum = (event) => {
    this.setState({ secondNumber: parseInt(event.target.value, 0) });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Calculate with React!</h1>
          <div className="add">
            <input type="number" onChange={this.handleFirstNum} />
            <span>+</span>
            <input type="number" onChange={this.handleSecondNum} />
            <span>=</span>
            <span>{this.state.answer}</span>
          </div>
          <button onClick={this.handleClick} id="add">
            Add
          </button>
          <button onClick={this.handleClick} id="subtract">
            Subtract
          </button>
          <button onClick={this.handleClick} id="multiply">
            Multiply
          </button>
          <button onClick={this.handleClick} id="division">
            Division
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
