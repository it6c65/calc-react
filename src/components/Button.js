import React from 'react';

class Equal extends React.Component {
  render(){
    return(
      <button className="btn-number">=</button>
    );
  }
}

class Zero extends React.Component {
  render(){
    return(
      <button className="btn-number" onClick={this.props.addzero(0)}>0</button>
    );
  }
}

class Number extends React.Component {
  render(){
    return (
      <button className="btn-number" onClick={this.props.whatNumber(this.props.number)}>{this.props.children}</button>
    );
  }
}

class Operator extends React.Component {
  render(){
    return (
      <button className="btn-operator" onClick={this.props.whatoperator(this.props.operator)}>{this.props.children}</button>
    );
  }
}

export {Number, Operator, Zero, Equal};
