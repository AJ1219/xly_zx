import React, { Component } from "react"
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
import "./App.css"
import configureStore from "./store/configureStore"

import routes from "./routes"

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    )
  }
}

export default App
