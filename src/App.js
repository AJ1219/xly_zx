import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import './App.css';
import Op from './container/Op';
import rootReducer from './reducers'

const logger = createLogger()
const store = createStore(rootReducer, compose(applyMiddleware(logger)))
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
