import React from 'react';
import './App.css';
import * as Button from './components/Button'
import PropTypes from 'prop-types'


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNumb: 0, secondNumb: 0, operator: "", result: 0 };
  }
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: "React - Calculator"
  }
  // Put number in the screen
  putNumber(value) {
    return () => {
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
  }
  // change the operator what calc will use
  changeOperator(value) {
    return () => {
      this.setState({
        operator: value
      })
    }
  }
  showResults() {
    // Do the operations needed
    // expressed cleaned
    let DoOperation = {
      "+": (first, second) => {
        return first + second;
      },
      "-": (first, second) => {
        return first - second;
      },
      "*": (first, second) => {
        return first * second;
      },
      "/": (first, second) => {
        return first / second;
      },
      "": (first, second) => {
        return 0
      }
    }
    // put the result of operation in the state
    // for show it in the screen
    this.setState(state => ({
      result: DoOperation[state.operator](state.firstNumb, state.secondNumb)
    }));
  }
  // Delete all values
  resetValues() {
    this.setState(state => ({
      firstNumb: 0, secondNumb: 0, result: 0, operator: ""
    }));
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
    // let firstRow = [1,2,3];
    // let MediumRow = [4,5,6];
    // let lastRow = [7,8,9];
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
              <Button.Number number={4} whatNumber={this.putNumber.bind(this)}>4</Button.Number>
              <Button.Number number={5} whatNumber={this.putNumber.bind(this)}>5</Button.Number>
              <Button.Number number={6} whatNumber={this.putNumber.bind(this)}>6</Button.Number>
            </div>
            <div>
              <Button.Number number={7} whatNumber={this.putNumber.bind(this)}>7</Button.Number>
              <Button.Number number={8} whatNumber={this.putNumber.bind(this)}>8</Button.Number>
              <Button.Number number={9} whatNumber={this.putNumber.bind(this)}>9</Button.Number>
            </div>
          </div>
          <div className="operations">
            <Button.Operator operator="+" addOperator={this.changeOperator.bind(this)}>+</Button.Operator>
            <Button.Operator operator="-" addOperator={this.changeOperator.bind(this)}>-</Button.Operator>
            <Button.Operator operator="*" addOperator={this.changeOperator.bind(this)}>&times;</Button.Operator>
            <Button.Operator operator="/" addOperator={this.changeOperator.bind(this)}>&divide;</Button.Operator>
          </div>
        </div>
        <Button.Reset reset={this.resetValues.bind(this)} />
        <Button.Zero addZero={this.putNumber.bind(this)} />
        <Button.Equal show={this.showResults.bind(this)} />
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
