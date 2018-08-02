import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import UserCenter from './container/UserCenter';
import StudentsLib from './container/StudentsLib';
import ClassDetail from './container/ClassDetail';
import configureStore from './store/configureStore'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserCenter />
        {/*<StudentsLib />*/}
        {/*<ClassDetail />*/}
      </Provider>
    );
  }
}

export default App;
