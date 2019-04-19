import React, { Component } from 'react';

interface IProp {
  value: number;
}
class Child extends Component<IProp> {
  render() {
    return (
      <div>
        <span>{this.props.value}</span>
      </div>
    );
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldCmponentUpdate() {
    console.log('shouldCmponentUpdate');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

export default Child;
