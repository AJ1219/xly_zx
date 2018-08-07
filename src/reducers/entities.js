import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function lessonEntity (state = {},action){
  let entities;
  switch(action.type){
    case `${ActionTypes.FETCH_CLASS_INFO}_SUC`: 
      entities =  action.response.entities
      return {
        ...state,
        ...entities.lessonEntity
      };
  
    default:
      return state;
  }
}
function classEntity (state = {},action){
  let entities
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
      entities =  action.response.entities
      return {
        ...state,
        ...entities.classEntity
      };
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return {
        ...state,
        ...action.response.currentLessonsList.entities.classEntity,
        ...action.response.historyLessonsList.entities.classEntity
      };
  
    default:
      return state;
  }
}
function classItemEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return {
        ...state,
        ...action.response.currentLessonsList.entities.classItemEntity,
        ...action.response.historyLessonsList.entities.classItemEntity
      };
    default:
      return state;
  }
}

function teacherEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teacherEntity
      };
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return {
        ...state,
        ...action.response.currentLessonsList.entities.teacherEntity,
        ...action.response.historyLessonsList.entities.teacherEntity
      };
    default:
      return state;
  }
}
function studentEntity (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.studentEntity
      };
    }
    default:
      return state;
  }
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
  satisfyEntity,
  lessonEntity,
  classItemEntity,
  studentEntity
});