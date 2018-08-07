import ActionTypes from '../const/ActionTypes'

function satisfied(state={}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
      return { ...state, [action.mid]: action.response.result }
    default:
      return state
  }
}

export default satisfied