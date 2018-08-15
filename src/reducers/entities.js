import { combineReducers } from "redux"
import ActionTypes from "../const/ActionTypes"

function lessonEntity(state = {}, action) {
  let entities
  switch (action.type) {
    case `${ActionTypes.FETCH_CLASS_INFO}_SUC`:
      ({ entities } = action.response)
      return {
        ...state,
        ...entities.lessonEntity
      }

    default:
      return state
  }
}
function classEntity(state = {}, action) {
  let entities
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`:
      ({ entities } = action.response)
      return {
        ...state,
        ...entities.classEntity
      }
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return {
        ...state,
        ...action.response.currentLessonsList.entities.classEntity,
        ...action.response.historyLessonsList.entities.classEntity
      }

    default:
      return state
  }
}
function classItemEntity(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
      return {
        ...state,
        ...action.response.currentLessonsList.entities.classItemEntity,
        ...action.response.historyLessonsList.entities.classItemEntity
      }
    default:
      return state
  }
}

function teacherEntity(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.teacherEntity
      }
    }
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      return {
        ...state,
        ...action.response.currentLessonsList.entities.teacherEntity,
        ...action.response.historyLessonsList.entities.teacherEntity
      }
    }
    default:
      return state
  }
}
function studentEntity(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.studentEntity
      }
    }
    default:
      return state
  }
}

function satisfyEntity(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.satisfyEntity
      }
    }
    case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
      const { time } = action.params
      const targetItem = { ...state[time] }
      targetItem.reply_status = 1
      return {
        ...state,
        [time]: targetItem
      }
    }
    default:
      return state
  }
}


function authorEntity(state = {}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.authorEntity
      }
    }
    default:
      return state
  }
}
function commentEntity(state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.commentEntity
      }
    }
    case `${ActionTypes.RETURN_BACK_HOMEWORK_COMMENT}`: {
      newState[action.commentId].status = "isReject"
      newState[action.commentId].reason = "就是想删除"
      return newState
    }
    case `${ActionTypes.PUBLISH_COMMENT_TO_HOMEWORK}`: {
      newState[action.newCommentItem.id] = action.newCommentItem
      return newState
    }

    default:
      return state
  }
}
function homeworkEntity(state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case `${ActionTypes.FETCH_HOMEWORK}_SUC`: {
      const { entities } = action.response
      return {
        ...state,
        ...entities.homeworkEntity
      }
    }
    case `${ActionTypes.SWITCH_EXCELLENT_HOMEWORK}`: {
      newState[action.id].isExcellent = !newState[action.id].isExcellent
      return newState
    }
    case `${ActionTypes.PUBLISH_COMMENT_TO_HOMEWORK}`: {
      newState[action.id].comments.unshift(action.newCommentItem.id)
      return newState
    }
    default:
      return state
  }
}

export default combineReducers({
  classEntity,
  teacherEntity,
  satisfyEntity,
  lessonEntity,
  classItemEntity,
  studentEntity,
  authorEntity,
  commentEntity,
  homeworkEntity
})
