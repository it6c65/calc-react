import React from 'react';
import './App.css';
import * as Button from './components/Button'

class Calc extends React.Component {
  constructor(props){
    super(props);
    this.state = { firstNumb: 0, secondNumb: 0, operator: "", result: 0 };
  }
  putNumber(value){
    return () => {
      if(this.state.operator !== ""){
        if(this.state.secondNumb === 0){
          this.setState({
            secondNumb: value
          });
        } else {
          this.setState({
            secondNumb: Number(String(this.state.secondNumb) + String(value))
          });
        }
      }else{
        if(this.state.firstNumb === 0){
          this.setState({
            firstNumb: value
          });
        } else {
          this.setState({
            firstNumb: Number(String(this.state.firstNumb) + String(value))
          });
        }
      }
    }
  }
  changeOperator(value){
    return () => {
      this.setState({
        operator: value
      })
    }
  }
  render(){
    let second_number, results;
    if (this.state.secondNumb === 0){
      second_number = "";
    }else {
      second_number = this.state.secondNumb;
    }
    if (this.state.result === 0){
      results = "";
    }else{
      results = <div> = {this.state.result}</div>;
    }
    return(
    <div>
      <h1>{this.props.title}</h1>
      <div className="show-results">
        <div className="results">
          <div>{this.state.firstNumb} {this.state.operator} {second_number} </div>
          {results}
        </div>
      </div>
      <div className="buttons">
        <div>
          <div>
            <Button.Number number={1} whatNumber={this.putNumber.bind(this)}>1</Button.Number>
            <Button.Number number={2} whatNumber={this.putNumber.bind(this)}>2</Button.Number>
            <Button.Number number={3} whatNumber={this.putNumber.bind(this)}>3</Button.Number>
          </div>
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
      <Button.Zero addZero={this.putNumber.bind(this)} />
      <Button.Equal />
    </div>
    );
  }
}

function App() {
  return (
    <div>
      <main>
        <Calc title="React - Calculator" />
      </main>
    </div>
  );
}

export default App;
