import ActionTypes from '../const/ActionTypes'

function homework(state = {
  myNoReview: [],
  myHisReview: [],
  allNoReview: [],
  allHisReview: []
}, action) {
  let newState = { ...state }
  switch(action.type){
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`:
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
      
    default:
      return state
  }
}

export default homework