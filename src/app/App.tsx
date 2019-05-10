import React, { Component } from 'react';
import '@style/App.sass';
import { counterActions } from '@app/store/action/counter.action';
import {connect} from 'react-redux'
import { store } from '@app/store';
import { createSelector } from 'reselect';

// https://github.com/piotrwitek/react-redux-typescript-guide#--with-default-props
interface IProps {
  count: number;
}

// https://orezytivarg.github.io/improving-react-and-redux-performance-with-reselect/

class App extends Component<IProps> {

  increase = () =>{
    store.dispatch(counterActions.increase(1))
  }
  decrease = () =>{
    store.dispatch(counterActions.decrease(1))
  }

  render(){
    console.log('render')
    return (
      <div>
        <strong>{this.props.count}</strong>
        <div>
          <button type="button" onClick={this.increase}>increase</button>
          <button type="button" onClick={this.decrease}>decrease</button>
        </div>
      </div>
    )
  }
}

// shallow compare memoization
const getCountValue = createSelector([(state: any) => state.counter], state => state.value);

const withProp = (state: any) => {
  return {count: getCountValue(state)};
}

export default connect(withProp)(App);
