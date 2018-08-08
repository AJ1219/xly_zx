import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import { HomeworkSchema } from '../schemas'

export default {
  fetchHomework: (params) => {
    const { token, isReviewed } = params
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_HOMEWORK,
        endpoint: '/getHomeWork',
        params: { token, isReviewed },
        normalizeFunc:response => normalize(response.data, HomeworkSchema.HOMEWORKLIST)
      },
      params: { token, isReviewed }
    }
  },
  returnBackComment: (params) => {
    const { commentId } = params
    return {
      type: ActionTypes.RETURN_BACK_HOMEWORK_COMMENT,
      commentId
    }
  },
  switchExcellent: (params) => {
    const { id } = params
    return {
      type: ActionTypes.SWITCH_EXCELLENT_HOMEWORK,
      id
    }
  },
  publishComment: (params) => {
    const { newCommentItem, id } = params
    return {
      type: ActionTypes.PUBLISH_COMMENT_TO_HOMEWORK,
      newCommentItem,
      id
    }
  }
}