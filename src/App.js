import React from 'react';
import logo from './logo.svg';
import './App.css';

// let operators = {
//   "+": (first, second) => {
//     return first + second
//   },
//   "-": (first, second) => {
//     return first - second
//   },
//   "*": (first, second) => {
//     return first * second
//   },
//   "/": (first, second) => {
//     return first / second
//   }
// }
// // Example of use operators["+"](2,3)

class Btnum extends React.Component {
  render(){
    return (
      <button className="btn-number" onClick={this.props.whatnumber(this.props.number)}>{this.props.children}</button>
    );
  }
}

class Calc extends React.Component {
  constructor(props){
    super(props);
    this.state = { firstNumb: 0, secondNumb: 0, operator: "" };
  }
  update(value){
    return () => {
      this.setState({
        firstNumb: value
      });
    }
  }
  render(){
    return(
    <div>
      <h1>{this.props.title}</h1>
      <div>Resultado</div>
      <div>{this.state.firstNumb}</div>
      <div>{this.state.secondNumb}</div>
      <div>
        <Btnum number={1} whatnumber={this.update.bind(this)}>1</Btnum>
        <Btnum number={2} whatnumber={this.update.bind(this)}>2</Btnum>
        <Btnum number={3} whatnumber={this.update.bind(this)}>3</Btnum>
      </div>
      <div>
        <Btnum number={4} whatnumber={this.update.bind(this)}>4</Btnum>
        <Btnum number={5} whatnumber={this.update.bind(this)}>5</Btnum>
        <Btnum number={6} whatnumber={this.update.bind(this)}>6</Btnum>
      </div>
      <div>
        <Btnum number={7} whatnumber={this.update.bind(this)}>7</Btnum>
        <Btnum number={8} whatnumber={this.update.bind(this)}>8</Btnum>
        <Btnum number={9} whatnumber={this.update.bind(this)}>9</Btnum>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>&times;</button>
        <button>&divide;</button>
      </div>
    </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calc title="Calculadora React" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
