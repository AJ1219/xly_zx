import axios from 'axios'
import ActionTypes from '../const/ActionTypes'

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn/'
const axiosFetch = axios.create({
  baseURL: API_DOMAIN,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

const callServerApi = (apiParams) => {
  const { endpoint, params } = apiParams
  return new Promise((resolve, reject) => {
    axiosFetch({
      method: 'POST',
      url: endpoint,
      data: params
    })
    .then(res => {
      if (res.data.ret === 1) {
        resolve(res)
      } else {
        reject(res.data.errMsg)
      }
    })
    .catch(res => {
      reject(JSON.stringify(res))
    })
  })
}

const serverApi = store => next => action => {
  if (!action.SERVER_API) return next(action)
  const {
    type,
    endpoint,
    params
  } = action.SERVER_API

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint.');
  }
  if (typeof type !== 'string') {
    throw new Error('Specify a string type.');
  }
  if (typeof params !== 'object') {
    throw new Error('Specify a object params.');
  }

  function actionWith(data) {
    const finalAction = { ...action, ...data }
    delete finalAction.SERVER_API;
    return finalAction;
  }

  next(actionWith({
    type: `${type}_REQ`
  }))

  callServerApi({ endpoint, params })
  .then(res => {
    next(actionWith({
      type: `${type}_SUC`,
      response: res.data
    }))
  })
  .catch(errMsg => {
    next(actionWith({
      type: `${type}_FAI`,
      errMsg
    }))
  })
}



export default serverApi