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
        value: 'id',
        text: '根据作业id搜索'
      }
    ]
    const {
      entities,
      homework,
      homeworkActions
    } = this.props
    return (
      <div>
        <OpSearcher options={options} onSearch={homeworkActions.searchHomeworkListByOption} />
        <HomeworkTabs entities={entities} listLib={homework} homeworkActions={homeworkActions} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  const {
    entities,
    homework
  } = state
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