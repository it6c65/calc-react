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
    // put the result of operation in the state
    // for show it in the screen
    this.setState(state => ({
      result: Do[state.operator](state.firstNumb, state.secondNumb)
    }));
  }
  // Delete all values
  resetValues() {
    this.setState(state => ({
      firstNumb: 0, secondNumb: 0, result: 0, operator: ""
    }));
  }
  rowNumbers(array){
    let numbers = array;
    let listNumbers = numbers.map((num) =>
        <Button.Number key={num.toString()} number={Number(num)} whatNumber={this.putNumber.bind(this)}>{num.toString()}</Button.Number>
    );
    return listNumbers;
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
