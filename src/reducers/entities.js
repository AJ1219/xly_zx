import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'


function classEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
    {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.classEntity
      };
    }
  }
  return state;
}

function teacherEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
    {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teacherEntity
      };
    }
  }
  return state;
}

function satisfyEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.satisfyEntity
      };
    case `${ActionTypes.REPLY_USER_FEED_BACK}`:
      const { time } = action.params
      const targetItem = { ...state[time] }
      targetItem.reply_status = 1
      return {
        ...state, 
        [time]: targetItem 
      }
    default:
      return state;
  }
}

export default combineReducers({
  classEntity,
  teacherEntity,
  satisfyEntity
});