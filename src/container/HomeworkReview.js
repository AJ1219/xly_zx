import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import homeworkActions from '../actions/homework'
import OpSearcher from '../component/OpSearcher/OpSearcher'
import HomeworkTabs from '../component/HomeworkTabs/HomeworkTabs'


class HomeworkReview extends Component {
  componentDidMount() {
    const { homeworkActions } = this.props
    homeworkActions.fetchHomework({ token: 1, isReviewed: 1 })
    homeworkActions.fetchHomework({ token: 1, isReviewed: 0 })
    homeworkActions.fetchHomework({ token: 0, isReviewed: 1 })
    homeworkActions.fetchHomework({ token: 0, isReviewed: 0 })
  }
  render () {
    const options = [
      {
        value: 'mid',
        text: '根据mid搜索'
      }
    ]
    const {
      entities,
      homework
    } = this.props
    return (
      <div>
        <h1>tabBar</h1>
        <OpSearcher options={options} onSearch={null} />
        <HomeworkTabs entities={entities} listLib={homework} />
      </div>
    )
  }
}
// const getAfterFilterList = (list, filter) => {
//   if (!filter) return list
//   const { keyName, value } = filter
//   return list.filter(item => {
//     console.log(item[keyName], value)
//     if (`${item[keyName]}` === value || value === '') {
//       return true
//     }
//     return false
//   })
// }
const mapStateToProps = state => {
  const {
    entities,
    homework
  } = state
  // const studentList = studentIds.map(id => studentEntity[id])
  return {
    entities,
    homework
  }
}
const mapDispatchToProps = dispatch => {
  return {
    homeworkActions: bindActionCreators(homeworkActions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview)