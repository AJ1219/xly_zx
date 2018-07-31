import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfoBox from '../component/UserInfoBox/UserInfoBox'
import OpTabs from '../component/OpTabs/OpTabs'

import * as api from '../api/api'

class Op extends Component {
  componentDidMount() {
    const mid = 33090002
    const { dispatch: next } = this.props
    api.fetchUserInfo(mid, next)
    api.fetchLessonInfo(mid, next)
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
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Op)