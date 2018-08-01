import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Op from './container/Op';
import configureStore from './store/configureStore'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Op />
      </Provider>
    );
  }
}

export default App;
