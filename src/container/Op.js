import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserInfoBox from '../component/UserInfoBox/UserInfoBox'
import OpTabs from '../component/OpTabs/OpTabs'

import userActions from '../actions/user'
import lessonActions from '../actions/lesson'

class Op extends Component {
  componentDidMount() {
    const mid = 33090002
    const { userActions, lessonActions } = this.props
    userActions.fetchUserInfo({ mid })
    lessonActions.fetchLessonInfo({ mid })
  }
  render() {
    const { 
      userInfo, 
      lessonInfo
    } = this.props
    return (
      <div>
        <UserInfoBox userInfo={userInfo} />
        <OpTabs 
          userInfo={userInfo} 
          lessonInfo={lessonInfo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    userInfo,
    lessonInfo,
  } = state
  return {
    userInfo,
    lessonInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    lessonActions: bindActionCreators(lessonActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Op)