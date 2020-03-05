import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store';
const store = configureStore();

import Content from "./src/button"

export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Content></Content>
      </Provider>
    )
  }
}