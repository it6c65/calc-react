import React from 'react';
import './App.css';
import * as Button from './components/Button'
import Do from './components/Action'
import PropTypes from 'prop-types'

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNumb: 0, secondNumb: 0, operator: "", result: 0 };
  }
  componentDidMount(){
    window.addEventListener("keydown", this.handleKeys);
  }
  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeys);
  }
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: "React - Calculator"
  }
  // Put number in the screen
  putNumber = value => {
    // If there is a result, change it with the first numb
    if (this.state.result !== 0) {
      this.setState({
        firstNumb: this.state.result, secondNumb: value, result: 0
      });
    } else {
      // While there is no operator exists the second numbs are forbidden
      if (this.state.operator !== "") {
        // If the first time just one value with second number
        if (this.state.secondNumb === 0) {
          this.setState({
            secondNumb: value
          });
          // the second time and after, change to string both values,
          // add another string and change a integer again with second number
        } else {
          this.setState({
            secondNumb: Number(String(this.state.secondNumb) + String(value))
          });
        }
      } else {
        // If the first time just one value with first number
        if (this.state.firstNumb === 0) {
          this.setState({
            firstNumb: value
          });
          // the second time and after, change to string both values,
          // add another string and change a integer again with first number
        } else {
          this.setState({
            firstNumb: Number(String(this.state.firstNumb) + String(value))
          });
        }
      }
    }
  }
  // change the operator what calc will use
  changeOperator = value => {
    this.setState({
      operator: value
    })
  }
  showResults = () => {
    // put the result of operation in the state
    // for show it in the screen
    let finalResult = Do(this.state.operator, this.state.firstNumb, this.state.secondNumb)
    this.setState({
      result: finalResult
    });
  }
  // Delete all values
  resetValues = () => {
    this.setState({
      firstNumb: 0, secondNumb: 0, operator: "", result: 0
    });
  }
  // Rows of buttons
  rowNumbers = array => {
    let numbers = array;
    let listNumbers = numbers.map((num) =>
        <Button.Number key={num.toString()}
                       number={Number(num)}
                       whatNumber={this.handleClickNumber.bind(this)}>
          {num.toString()}
        </Button.Number>
    );
    return listNumbers;
  }
  // Controlling the clicks events
  handleClickNumber = value => {
    return () => {
      this.putNumber(value)
    }
  }
  handleClickOperator = value => {
    return () => {
      this.changeOperator(value)
    }
  }
  handleClickResult = () => {
    this.showResults()
  }
  handleClickReset = () => {
    this.resetValues()
  }
  // Controlling the key events
  handleKeys = event => {
    switch (event.key) {
        case "1":
          this.putNumber(event.key)
          break
        case "2":
          this.putNumber(event.key)
          break
        case "3":
          this.putNumber(event.key)
          break
        case "4":
          this.putNumber(event.key)
          break
        case "5":
          this.putNumber(event.key)
          break
        case "6":
          this.putNumber(event.key)
          break
        case "7":
          this.putNumber(event.key)
          break
        case "8":
          this.putNumber(event.key)
          break
        case "9":
          this.putNumber(event.key)
          break
        case "+":
          this.changeOperator(event.key)
          break
        case "-":
          this.changeOperator(event.key)
          break
        case "*":
          this.changeOperator(event.key)
          break
        case "/":
          this.changeOperator(event.key)
          break
        case "Enter":
          this.showResults()
          break
        case "Delete":
          this.resetValues()
          break
        case "Backspace":
          this.resetValues()
          break
        default:
          console.log(event.key, "is not permited")
        break
    }
  }
  render() {
    let second_number, results;
    // if second number is cero not show in screen
    if (this.state.secondNumb === 0) {
      second_number = "";
    } else {
      second_number = this.state.secondNumb;
    }
    // the same with result
    if (this.state.result === 0) {
      results = "";
    } else {
      results = "= " + this.state.result;
    }
    let firstRow = [1,2,3];
    let mediumRow = [4,5,6];
    let lastRow = [7,8,9];
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="show-results">
          {/* operations and final results */}
          <div className="results">
            <div> {this.state.firstNumb} {this.state.operator} {second_number} </div>
            <div id="result">
              {results}
            </div>
          </div>
        </div>
        <div className="buttons">
          <div>
            <div>
              {this.rowNumbers(firstRow)}
            </div>
            <div>
              {this.rowNumbers(mediumRow)}
            </div>
            <div>
              {this.rowNumbers(lastRow)}
            </div>
          </div>
          <div className="operations">
            <Button.Operator operator="+"
                             addOperator={this.handleClickOperator.bind(this)}>
              +
            </Button.Operator>
            <Button.Operator operator="-"
                             addOperator={this.handleClickOperator.bind(this)}>
              -
            </Button.Operator>
            <Button.Operator operator="*"
                             addOperator={this.handleClickOperator.bind(this)}>
              &times;
            </Button.Operator>
            <Button.Operator operator="/"
                             addOperator={this.handleClickOperator.bind(this)}>
              &divide;
            </Button.Operator>
          </div>
        </div>
        <Button.Reset reset={this.handleClickReset.bind(this)} />
        <Button.Zero addZero={this.handleClickNumber.bind(this)} />
        <Button.Equal show={this.handleClickResult.bind(this)} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <main>
        <Calc />
      </main>
    </div>
  );
}

export default App;
