import { combineReducers } from 'redux'

function list(state = [], action) {
  switch (action.type) {
    case "FETCH_STUDENT_LIST_SUC":
      return [ 
        ...state, 
        ...action.response.data
      ]
    default:
      return state
  }
}
function filterOption(state = null, action) {
  switch (action.type) {
    case "SEARCH_STUDENT_LIST_BY_OPTION":
      return action.params
    default:
      return state
  }
}

const studentLib = combineReducers({
  list,
  filterOption
})
export default studentLib
