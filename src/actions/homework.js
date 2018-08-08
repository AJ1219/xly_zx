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
  }
}