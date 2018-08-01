import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import classActions from '../actions/class'

import LessonsTable from '../component/LessonsTable/LessonsTable'
import ClassInfoBox from '../component/ClassInfoBox/ClassInfoBox'

class ClassDetail extends Component {
  state = {
    classId: 33090002
  }
  componentDidMount() {
    const classId = this.state.classId
    const { classActions } = this.props
    classActions.fetchClassInfo({ classId })
  }
  render() {
    const { 
      basicInfo, 
      lessonList
    } = this.props
    const classId = this.state.classId
    return (
      <div>
        <ClassInfoBox data={basicInfo[classId]}/>
        <LessonsTable list={lessonList[classId]} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    classesDetail: {
      basicInfo,
      lessonList
    }
  } = state
  return {
    basicInfo,
    lessonList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    classActions: bindActionCreators(classActions, dispatch),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail)