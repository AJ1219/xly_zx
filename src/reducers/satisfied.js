import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function satisfied(state={}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
      return { ...state, [action.mid]: action.response.data.list }
    default:
      return state
  }
}

export default satisfied