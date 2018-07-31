import { combineReducers } from 'redux'

function currentLessonsList(state = [], action) {
  switch(action.type){
    case "FETCH_LESSON_INFO_SUC":
      return [ ...state, ...action.response.data.currentLessonsList ]
      
    default:
      return state
  }
}
function historyLessonsList(state = [], action) {
  switch(action.type){
    case "FETCH_LESSON_INFO_SUC":
      return [ ...state, ...action.response.data.historyLessonsList ]
    default:
      return state
  }
}

const lessonInfo = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default lessonInfo