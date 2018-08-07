import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import { LessonSchema } from '../schemas'

export default {
  fetchClassInfo: (params) => {
    const { classId } = params
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_CLASS_INFO,
        endpoint: '/getClassInfo',
        params: {
          id: classId
        },
        normalizeFunc:response => {
          return {
            ...normalize(response.data.list, LessonSchema.LESSONLIST),
            basic_info: response.data.basic_info
          }
        }
      },
      classId
    }
  }
}