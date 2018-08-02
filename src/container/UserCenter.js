import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserInfoBox from '../component/UserInfoBox/UserInfoBox'
import OpTabs from '../component/OpTabs/OpTabs'

import userActions from '../actions/user'
import lessonActions from '../actions/lesson'

class UserCenter extends Component {
  componentDidMount() {
    const mid = 33090002
    const { userActions, lessonActions } = this.props
    userActions.fetchUserInfo({ mid })
    lessonActions.fetchLessonInfo({ mid })
    lessonActions.fetchLessonSatisfiedInfo({ mid })
  }
  render() {
    const { 
      userInfo, 
      lessonInfo,
      satisfiedInfo
    } = this.props
    return (
      <div>
        <UserInfoBox userInfo={userInfo} />
        <OpTabs 
          userInfo={userInfo} 
          lessonInfo={lessonInfo}
          satisfiedInfo={satisfiedInfo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    userInfo,
    lessonInfo,
    satisfied
  } = state
  return {
    userInfo,
    lessonInfo,
    satisfiedInfo: satisfied[33090002]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    lessonActions: bindActionCreators(lessonActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserCenter)