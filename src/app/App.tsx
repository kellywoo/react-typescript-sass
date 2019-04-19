import React, { Component } from 'react';
import '@style/App.sass';
import logo from '@image/logo.svg';
import Child from '@component/views/child/Child';

// https://github.com/piotrwitek/react-redux-typescript-guide#--with-default-props
interface IState {
  value: number;
}
class App extends Component {
  readonly state: IState = { value: 0 };
  increment() {
    setInterval(() => {
      this.setState((prevState: IState) => {
        return { value: ++prevState.value };
      });
    }, 5000);
  }

  componentDidMount() {
    this.increment();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Child value={this.state.value} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
