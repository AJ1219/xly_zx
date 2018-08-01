import ActionTypes from '../const/ActionTypes'

export default {
  fetchUserInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_USER_INFO,
        endpoint: '/getUserInfo',
        params: {
          mid: params.mid
        }
      }
    }
  }
}