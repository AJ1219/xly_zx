import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'

// import OpTabs from '../component/OpTabs/OpTabs'
import UserInfoBox from '../component/UserInfoBox/UserInfoBox'
import ButtonGroup from '../component/ButtonGroup/ButtonGroup'
import DataTables from '../component/DataTables/DataTables'

import '../component/OpTabs/OpTabs.css'
const TabPane = Tabs.TabPane;

class Op extends Component {
  render() {
    const { 
      userInfo, 
      lessonInfo, 
      userInfo: {
        learningLesson
      }
    } = this.props
    return (
      <div>
        <UserInfoBox userInfo={userInfo} />
        <Tabs tabBarStyle={{padding: '0 20px'}} defaultActiveKey="1" onChange={null}>
          <TabPane className="tab-pane" tab="课程信息" key='1'>
            <ButtonGroup customButtons={learningLesson}/>
            <DataTables lessonInfo={lessonInfo} />
          </TabPane>
          <TabPane className="tab-pane" tab="满意度反馈" key='2'>
            满意度反馈(待开发)
          </TabPane>
        </Tabs>
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

const mapDispatchToProps = {
  
}



export default connect(mapStateToProps)(Op)