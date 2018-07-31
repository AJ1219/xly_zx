import axios from 'axios'
import ActionTypes from '../const/ActionTypes'

const axiosFetch = axios.create({
  baseURL: 'http://xly-wkop.xiaoniangao.cn/',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});
export function fetchUserInfo(mid, next) {
  next({
    type: `${ActionTypes.FETCH_USER_INFO}_REQ`
  })
  axiosFetch({
    method: 'POST',
    url: '/getUserInfo',
    data: {
      mid,
      test: '1231'
    }
  })
  .then(res => {
    if (res.data.ret === 1) {
      next({
        type: `${ActionTypes.FETCH_USER_INFO}_SUC`,
        response: res.data
      })
    } else {
      next({
        type: `${ActionTypes.FETCH_USER_INFO}_FAI`,
        msg: res.data.errMsg
      })
    }
  })
  .catch(res => {
    next({
      type: `${ActionTypes.FETCH_USER_INFO}_FAI`,
      msg: res.data.errMsg
    })
  })
}
export function fetchLessonInfo(mid, next) {
  next({
    type: `${ActionTypes.FETCH_LESSON_INFO}_REQ`
  })
  axiosFetch({
    method: 'POST',
    url: '/getLessonInfo',
    data: {
      mid
    }
  })
  .then(res => {
    if (res.data.ret === 1) {
      next({
        type: `${ActionTypes.FETCH_LESSON_INFO}_SUC`,
        response: res.data
      })
    } else {
      next({
        type: `${ActionTypes.FETCH_LESSON_INFO}_FAI`,
        msg: res.data.errMsg
      })  
    }
  })
  .catch(res => {
    next({
      type: `${ActionTypes.FETCH_LESSON_INFO}_FAI`,
      msg: res.data.errMsg
    })
  })
}
