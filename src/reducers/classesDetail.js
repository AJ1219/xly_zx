import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function basicInfo(state={}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_CLASS_INFO}_SUC`:
      return { ...state, [action.classId]: { ...action.response.basic_info } }
    default:
      return state
  }
}
function lessonList(state={}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_CLASS_INFO}_SUC`:
      return { ...state, [action.classId]: [ ...action.response.result ] }
    default:
      return state
  }
}

const classesDetail = combineReducers({
  basicInfo,
  lessonList
})
export default classesDetail