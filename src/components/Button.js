import React from 'react';

//button for show the results of the operations
class Equal extends React.Component {
  render(){
    return(
      <button className="btn-equal" onClick={this.props.show}>=</button>
    );
  }
}

// button for add zeros in the screen
class Zero extends React.Component {
  render(){
    return(
      <button className="btn-number" onClick={this.props.addZero(0)}>0</button>
    );
  }
}

// button numbers of the calc
class Number extends React.Component {
  render(){
    return (
      <button className="btn-number" onClick={this.props.whatNumber(this.props.number)}>{this.props.children}</button>
    );
  }
}

// button operators of the calc
class Operator extends React.Component {
  render(){
    return (
      <button className="btn-operator" onClick={this.props.addOperator(this.props.operator)}>{this.props.children}</button>
    );
  }
}

// button for delete all
class Reset extends React.Component {
  render(){
    return (
      <button className="btn-number" onClick={this.props.reset}>C</button>
    );
  }
}

export {Number, Operator, Zero, Equal, Reset};
