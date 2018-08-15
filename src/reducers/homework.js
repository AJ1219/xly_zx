import ActionTypes from "../const/ActionTypes"

function homework(state = {
  myNoReview: [],
  myHisReview: [],
  allNoReview: [],
  allHisReview: [],
  filterOption: {},
  currentTabKey: "myNoReview"
}, action) {
  let newState = { ...state }
  switch (action.type) {
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`: {
      const { token, isReviewed } = action.params
      const response = action.response.result
      if (token === 1 && isReviewed === 1) {
        newState = {
          ...state,
          myHisReview: response
        }
      } else
      if (token === 0 && isReviewed === 1) {
        newState = {
          ...state,
          allHisReview: response
        }
      } else
      if (token === 1 && isReviewed === 0) {
        newState = {
          ...state,
          myNoReview: response
        }
      } else
      if (token === 0 && isReviewed === 0) {
        newState = {
          ...state,
          allNoReview: response
        }
      }
      return newState
    }

    case `${ActionTypes.SEARCH_HOMEWORK_LIST_BY_OPTION}`:
      return {
        ...state,
        filterOption: action.params
      }

    case `${ActionTypes.SWITCH_CURRENT_TAB}`:
      return {
        ...state,
        currentTabKey: action.currentTabKey
      }
    case `${ActionTypes.PUBLISH_COMMENT_TO_HOMEWORK}`:
      // action.id
      // state.currentTabKey
      if (state.currentTabKey === "myNoReview" || state.currentTabKey === "allNoReview") {
        newState = {
          ...state,
          myNoReview: state.myNoReview.filter(id => id !== action.id),
          allNoReview: state.allNoReview.filter(id => id !== action.id),
          myHisReview: [action.id].concat(state.myHisReview),
          allHisReview: [action.id].concat(state.allHisReview)
        }
      }
      return newState

    default:
      return state
  }
}

export default homework
