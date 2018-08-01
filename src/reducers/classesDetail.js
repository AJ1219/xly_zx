import { combineReducers } from 'redux'
function basicInfo(state={}, action) {
  switch (action.type) {
    case 'FETCH_CLASS_INFO_SUC':
      return { ...state, [action.classId]: action.response.data.basic_info }
    default:
      return state
  }
}
function lessonList(state={}, action) {
  switch (action.type) {
    case 'FETCH_CLASS_INFO_SUC':
      return { ...state, [action.classId]: action.response.data.list }
    default:
      return state
  }
}

const classesDetail = combineReducers({
  basicInfo,
  lessonList
})
export default classesDetail