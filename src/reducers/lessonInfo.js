import { combineReducers } from 'redux'

function currentLessonsList(state = [
  {
    classInfo: {
      id: 98858,
      name: '高级班'
    },
    status: 1,  // 1-进行中 0-以结束
    startTime: '2017-04-20',
    teacherInfo: {
      nick: '小白老师',
      id: 76544,
      wxCode: 'fgg',
      realName: '白帆',
      mid: '98676',
    },
    enterRate: '3/21',
    homeworkSubmitRate: '0.6798',
    beCommenttedRate: '0.8798',
    signRate: '3/21',
    satisfyRate: '0.9014'
  },
  {
    classInfo: {
      id: 98857,
      name: '进阶班'
    },
    status: 0,  // 1-进行中 0-以结束
    startTime: '2017-04-20',
    teacherInfo: {
      nick: '小白老师',
      id: 76544,
      wxCode: 'fgg',
      realName: '白帆',
      mid: '98676',
    },
    enterRate: '20/21',
    homeworkSubmitRate: '0.6798',
    beCommenttedRate: '0.3798',
    signRate: '16/21',
    satisfyRate: '0.9714'
  }
], action) {
  return state
}
function historyLessonsList(state = [
  {
    classInfo: {
      id: 98858,
      name: '高级班'
    },
    status: 1,  // 1-进行中 0-以结束
    startTime: '2017-04-20',
    teacherInfo: {
      nick: '小白老师',
      id: 76544,
      wxCode: 'fgg',
      realName: '白帆',
      mid: '98676',
    },
    enterRate: '17/21',
    homeworkSubmitRate: '0.6798',
    beCommenttedRate: '0.8798',
    signRate: '3/21',
    satisfyRate: '0.9814'
  }
], action) {
  return state
}

const lessonInfo = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default lessonInfo