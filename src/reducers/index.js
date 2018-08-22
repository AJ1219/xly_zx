import { combineReducers } from "redux"
import lessonInfo from "./lessonInfo"
import userInfo from "./userInfo"
import ui from "./ui"
import studentLib from "./studentLib"
import classesDetail from "./classesDetail"
import satisfied from "./satisfied"
import homework from "./homework"
import entities from "./entities"
import game2048 from "./game2048"

const rootReducer = combineReducers({
  lessonInfo,
  userInfo,
  studentLib,
  classesDetail,
  satisfied,
  ui,
  entities,
  homework,
  game2048
})
export default rootReducer
