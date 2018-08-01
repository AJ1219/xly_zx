import ActionTypes from '../const/ActionTypes'

export default {
  fetchLessonInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_INFO,
        endpoint: '/getLessonInfo',
        params: {
          mid: params.mid
        }
      }
    }
  }
}