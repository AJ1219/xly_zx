import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import serverApi from "../middleware/serverApi"
import rootReducer from "../reducers"

export default function configureStore(initialState) {
  const logger = createLogger({
    duration: true,
    diff: false
  })

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(serverApi, logger)
  )

  return store
}
