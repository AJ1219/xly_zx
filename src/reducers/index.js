import { combineReducers } from 'redux'
import lessonInfo from './lessonInfo'
import userInfo from './userInfo'
import ui from './ui'
const rootReducer = combineReducers({
  lessonInfo,
  userInfo,
  ui
})
export default rootReducer