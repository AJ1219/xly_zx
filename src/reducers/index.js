import { combineReducers } from "redux"
import lessonInfo from "./lessonInfo"
import userInfo from "./userInfo"
import ui from "./ui"
import studentLib from "./studentLib"
import classesDetail from "./classesDetail"
import satisfied from "./satisfied"
import homework from "./homework"
import entities from "./entities"

const rootReducer = combineReducers({
  lessonInfo,
  userInfo,
  studentLib,
  classesDetail,
  satisfied,
  ui,
  entities,
  homework
})
export default rootReducer
