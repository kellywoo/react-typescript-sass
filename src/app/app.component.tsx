import React, { Component } from 'react';
import '@style/app.sass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import { windowEventService } from '@app/util/window.event';
// https://github.com/piotrwitek/react-redux-typescript-guide#--with-default-props

export default class AppComponent extends Component {
  state: { clazz: string } = { clazz: '' };

  componentWillMount(): void {
    windowEventService.scroll$.subscribe(({ y, h }) => {
      this.setState({clazz: (y > 50 ? ' is-float': '')})
    });
  }

  render() {
    return (
      <div className={'app' + this.state.clazz}>
        <BrowserRouter>
          <div className="app-body">
            <Switch />
          </div>
        </BrowserRouter>
        {process.env.NODE_ENV === 'development' && <DevTools/>}
      </div>
    );
  }
}

