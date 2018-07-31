function userInfo(state = {
  nick: '三班人',
  hurl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  mid: 330900002,
  history_pay: 987,
  tel: 1321233124,
  learningLesson: ['摄影课', '绘画课'],
  totalLearningDays: 876,
  weiChatCode: 'zhdng',
  enterDate: '2018-03-30',
  lastLoginDate: '2018-03-30',
  remark: ''
}, action) {
  switch (action.type) {
    case "FETCH_USER_INFO_SUC":
      return { 
        ...state, 
        ...action.response.data.historyLessonsList 
      }
    default:
      return state
  }
}
export default userInfo
