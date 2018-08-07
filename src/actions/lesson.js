import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import { LessonSchema, SatisfySchema } from '../schemas'

export default {
  fetchLessonInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_INFO,
        endpoint: '/getLessonInfo',
        params: {
          mid: params.mid
        },
        normalizeFunc:response=> {
          return {
            currentLessonsList: normalize(response.data.currentLessonsList, LessonSchema.LESSONINFO),
            historyLessonsList: normalize(response.data.historyLessonsList, LessonSchema.LESSONINFO)
          }
        }
      },
      mid: params.mid
    }
  },
  fetchLessonSatisfiedInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_SATISFIED_INFO,
        endpoint: '/getSatisfiledList',
        params: {
          mid: params.mid
        },
        normalizeFunc: json => normalize(json.data.list, SatisfySchema.SATISFYLIST)
      },
      mid: params.mid
    }
  },
  replyUserFeedBack: (params) => {
    const { mid, lessonIndex, time } = params
    return {
      type: ActionTypes.REPLY_USER_FEED_BACK,
      params: { mid, lessonIndex, time }
    }
  }
}