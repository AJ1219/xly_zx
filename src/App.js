import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import UserCenter from './container/UserCenter';
import configureStore from './store/configureStore'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserCenter />
      </Provider>
    );
  }
}

export default App;
