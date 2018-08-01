function userInfo(state = {}, action) {
  switch (action.type) {
    case "FETCH_USER_INFO_SUC":
      return { 
        ...state, 
        ...action.response.data
      }
    default:
      return state
  }
}
export default userInfo
