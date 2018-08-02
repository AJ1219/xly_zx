import { combineReducers } from 'redux'
import lessonInfo from './lessonInfo'
import userInfo from './userInfo'
import ui from './ui'
import studentLib from './studentLib'
import classesDetail from './classesDetail'
const rootReducer = combineReducers({
  lessonInfo,
  userInfo,
  studentLib,
  classesDetail,
  ui
})
export default rootReducer